<template>
  <div>
    <div class="attach-buttons-wrap">
      <a-button
        v-for="btn in attachButtons"
        v-bind="btn.props"
        :key="btn.name"
        style="margin-right: 10px"
        :disabled="
          typeof btn?.props?.disabled === 'function'
            ? btn?.props?.disabled(selectedRowKeys)
            : btn?.props?.disabled ?? false
        "
        @click="btn.onclick({ selectedRowKeys })"
        >{{ btn.name }}</a-button
      >
    </div>
    <a-table
      v-bind="{
        loading: localLoading,
        pagination: localPagination,
        // rowSelection: localRowSelection,
        rowKey: 'id',
        ...$attrs,
      }"
      :data-source="dataSource"
    >
      <!-- 自定义渲染单元格 -->
      <template #bodyCell="{ text, record, index, column }">
        <!-- 操作列 -->
        <template v-if="column.dataIndex === 'operation'">
          <a
            v-for="(item, itemIndex) in column.buttons"
            :key="itemIndex"
            :style="{
              marginRight: '12px',
              display: btnShow({ item, text, record, index, column }) ? 'inline-block' : 'none',
              ...(item.style || {}),
            }"
            @click="item.onclick({ text, record, index, column })"
            >{{ item.name }}</a
          >
        </template>
        <!-- 序号 -->
        <template v-if="column.type === 'serial'">
          {{ (localPagination.current - 1) * localPagination.pageSize + index + 1 }}
        </template>
        <!-- 百分比 -->
        <template v-else-if="column.type === 'percent'">{{ formatPercent(text) }}</template>
        <!-- 数值 -->
        <template v-else-if="column.type === 'number'">{{ formatNumber(text) }}</template>
        <!-- 金额 -->
        <template v-else-if="column.type === 'money'">{{ formatMoney(text) }}</template>
        <!-- 列插槽 -->
        <template v-else-if="columnSlots.includes(column.dataIndex)">
          <template v-for="slot in columnSlots" :key="slot">
            <slot :name="`column-${slot}`" v-bind="{ text, record, index, column }"></slot>
          </template>
        </template>
        <!-- 自定义列渲染 -->
        <template v-else-if="typeof column?.customRender === 'function'">
          <!-- 渲染customRender -->
          <component :is="column.customRender" v-bind="{ text, record, index, column }"></component>
        </template>
      </template>
      <!-- 插槽透传 -->
      <template v-for="(value, name) in $slots" #[name]="slotProps">
        <slot :name="name" v-bind="slotProps"></slot>
      </template>
    </a-table>
  </div>
</template>

<script setup>
  import { ref, reactive, computed, onMounted, useSlots, unref } from 'vue';
  import { formatPercent, formatMoney, formatNumber } from '@/utils/index.ts';
  const props = defineProps({
    data: {
      type: [Function, Array],
      default: () => [],
    },
    // 附属操作按钮
    attachButtons: {
      type: Array,
      default: () => [],
    },
  });
  const emits = defineEmits(['refresh']);
  const slots = useSlots();
  const columnSlots = ref([]);
  const createColumnSlots = () => {
    columnSlots.value = Object.keys(slots)
      .filter((x) => x.indexOf('column') !== -1)
      .map((x) => x.split('-')[1]);
  };

  const btnShow = computed(
    () =>
      ({ item, text, record, index, column }) =>
        typeof item?.show == 'function'
          ? item.show({ text, record, index, column })
          : item.show ?? true,
  );
  // 列表数据
  const dataSource = ref([]);
  // 分页
  const localPagination = reactive({
    current: 1,
    pageSize: 10,
    total: 0,
    showTotal: (total) => `共 ${total} 条记录`,
    showSizeChanger: true,
    showQuickJumper: true,
    onChange: (current, size) => {
      localPagination.current = current;
      localPagination.pageSize = size;
      loadData({ current, pageSize: size });
    },
    pageSizeOptions: ['10', '20', '30', '40', '50'],
  });
  // 是否分页
  const isPagination = ref(false);
  // loading状态
  const localLoading = ref(false);
  const selectedRowKeys = ref([]);
  // 选择列
  const onSelectChange = (rowKeys) => {
    selectedRowKeys.value = rowKeys;
  };
  const localRowSelection = computed(() => {
    return {
      selectedRowKeys: unref(selectedRowKeys),
      onChange: onSelectChange,
    };
  });

  const loadData = (pagination) => {
    localLoading.value = true;
    const params = isPagination.value
      ? {
          pageNo: pagination?.current ? pagination.current : localPagination.current,
          pageSize: pagination?.pageSize ? pagination.pageSize : localPagination.pageSize,
        }
      : {};
    if (!props.data) {
      dataSource.value = [];
      return;
    }
    if (Array.isArray(props.data)) {
      dataSource.value = props.data;
      localLoading.value = false;
    } else {
      props
        .data(params)
        .then((retObj) => {
          const { list, total, pageSize, pageNum } = retObj;
          isPagination.value = retObj.hasOwnProperty('list');
          if (isPagination.value) {
            localPagination.total = total || 0;
            localPagination.pageSize = pageSize;
            localPagination.pageNum = pageNum;
            dataSource.value = list?.length ? list : [];
            if (list?.length === 0 && localPagination.current > 1) {
              localPagination.current--;
              loadData();
            }
          } else {
            dataSource.value = retObj?.length ? retObj : [];
          }
        })
        .finally(() => (localLoading.value = false));
    }
  };

  // 刷新表格数据
  const refresh = (isInit = false) => {
    // 页码重置1
    if (isInit) {
      localPagination.current = 1;
      localPagination.total = 0;
      emits('refresh');
    }
    loadData();
  };

  onMounted(() => {
    createColumnSlots();
    loadData();
  });

  defineExpose({ refresh });
</script>

<style lang="less" scoped>
  .attach-buttons-wrap {
    margin-bottom: 10px;
  }
</style>
