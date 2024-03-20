<template>
  <div>
    <Card>
      <DynamicTable
        ref="dynamicTableRef"
        size="small"
        bordered
        :data-request="loadData"
        :columns="columns"
        :scroll="{ x: 1500, y: 300 }"
        @toggle-advanced="toggleAdvanced"
      >
        <template #toolbar>
          <a-button type="primary" @click="defaultHeader"> 导出：默认头部 </a-button>
          <a-button type="primary" @click="customHeader"> 导出：自定义头部 </a-button>
        </template>
      </DynamicTable>
    </Card>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import { Card } from 'ant-design-vue';
  import { columns } from './columns';
  import { useTable } from '@/components/core/dynamic-table';
  import { jsonToSheetXlsx } from '@/components/basic/excel';
  import { ProductTypeEnum } from '@/enums/enum';
  import { appVersionFindApi } from '@/api/app';

  let tableData = [];
  const [DynamicTable, dynamicTableInstance] = useTable();

  function defaultHeader() {
    // 默认Object.keys(data[0])作为header
    jsonToSheetXlsx({
      data: tableData,
      filename: '使用key作为默认头部.xlsx',
    });
  }

  // 自定义头部
  function customHeader() {}

  // 展开搜索表单时更新英雄皮肤选项值
  const toggleAdvanced = (e) => {};

  const loadData = async (params) => {
    const { data } = await appVersionFindApi(params);

    tableData = data.list;
    data.list = data.content;
    console.log(data, 11111990);

    dynamicTableInstance?.getQueryFormRef()?.updateSchema?.([
      {
        field: 'skin_name',
        componentProps: {
          options: [
            {
              label: '皮肤1',
              value: 'aa',
            },
            {
              label: '皮肤2',
              value: 'bb',
            },
          ],
        },
      },
    ]);
    return data;
  };
  onMounted(() => {
    console.log(ProductTypeEnum, 1110000000);
  });
</script>

<style lang="less" scoped>
  @import url('./index.less');
</style>
