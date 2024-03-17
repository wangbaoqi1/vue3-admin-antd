<template>
  <div>
    <Alert message="扩展antd按钮样式" type="info" show-icon style="margin-bottom: 12px" />
    <Card>
      <Divider orientation="left">扩展按钮类型</Divider>
      <Space v-mark="['admin1']">
        <AButton type="primary">primary1111</AButton>
        <AButton type="error">error</AButton>
        <AButton type="warning">warning111</AButton>
        <AButton type="success">success</AButton>
      </Space>

      <Divider orientation="left">自定义按钮颜色</Divider>
      <Space v-permission="909090">
        <template v-for="item in themeColors" :key="item.key">
          <AButton :color="item.value">{{ item.title }}</AButton>
        </template>
      </Space>

      <Divider orientation="left">幽灵按钮</Divider>
      <Space>
        <template v-for="item in themeColors" :key="item.key">
          <AButton ghost :color="item.value">{{ item.title }}</AButton>
        </template>
      </Space>
    </Card>
  </div>
</template>

<script setup lang="ts">
  import { Alert, Space, Card, Divider } from 'ant-design-vue';
  import { AButton } from '@/components/basic/button';
  import { themeColors } from '@/layout/header/components/setting/constant';

  defineOptions({
    name: 'DemoButton',
  });
</script>
