### 基础组件（目录说明）
<template>
  <div style="padding: 40px">
    <MyTable
      ref="myTable"
      :data="getDataFromApi"
      :columns="columns"
      :attachButtons="attachButtons"
    >
      <template #column-tags="{ record }">
        <a-tag v-for="tag in record.tags" :key="tag">
          {{ tag.toUpperCase() }}
        </a-tag>
      </template>
      <template #headerCell="{ column }">
        <template v-if="column.dataIndex === 'tags'">测试表头(列插槽)</template>
      </template>
    </MyTable>
  </div>
</template>

<script lang="jsx" setup>
import MyTable from "@/components/table/index.vue";
import { ref } from "vue";

import { getRemoteTableData, getRandomNumber } from "@/common/utils";
const myTable = ref(null);

const columns = [
  {
    title: "序号",
    dataIndex: "name",
    type: "serial",
  },
  {
    title: "姓名",
    dataIndex: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
  },
  {
    title: "性别",
    dataIndex: "sex",
  },
  {
    title: "士兵数量",
    dataIndex: "score",
    type: "number",
  },
  {
    title: "铁骑兵占比",
    dataIndex: "percent",
    type: "percent",
  },
  {
    title: "军费",
    dataIndex: "price",
    type: "money",
  },
  {
    title: "标签",
    dataIndex: "tags",
  },
  {
    title: "自定义渲染列",
    dataIndex: "custom",
    customRender: ({record}) => <div><a>{record.name} </a><span style="color: green">年龄：{record.age}</span></div>
  },
  {
    title: "操作",
    dataIndex: "operation",
    buttons: [
      {
        name: "查看",
        onclick: ({ record }) => {
          console.log("查看", record);
        },
        show: ({ record }) => record.name === "诸葛亮4",
      },
      {
        name: "编辑",
        onclick: ({ record }) => {
          console.log("编辑", record);
        },
      },
      {
        name: "删除",
        onclick: ({ record }) => {
          console.log("删除", record);
        },
        style: {
          color: "red",
        },
      },
    ],
    width: 180,
  },
];

const getDataFromApi = async () => {
  let getData = Array.from({ length: 10 }, (_, i) => i).map((x, i) => ({
    id: getRandomNumber(1, 10000000000000),
    name: `诸葛亮${i + 1}`,
    age: getRandomNumber(10, 100),
    sex: `男`,
    price: getRandomNumber(1000, 100000),
    percent: getRandomNumber(1, 100),
    score: getRandomNumber(100000, 1000000000),
    tags: ["OK", "YES"],
  }));
  return await getRemoteTableData([...getData]);
};

const attachButtons = ref([
  {
    name: "刷新",
    onclick: () => myTable.value.refresh(true)
  },
  {
    name: "批量删除",
    onclick: ({selectedRowKeys}) => {console.log('selectedRowKeys', selectedRowKeys)},
    props: {
      type: 'primary',
      danger: true,
      disabled: (selectedRowKeys) => !selectedRowKeys.length
    }
  },
   {
    name: "导出Excel",
    onclick: () => {console.log('导出文件')},
    props: {
      type: 'primary',
    },
  }
])
</script>
