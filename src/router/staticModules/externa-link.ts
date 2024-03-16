import type { RouteRecordRaw } from 'vue-router';
import RouterView from '@/layout/routerView/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: 'http://wangbaoqi1.gitee.io/vite-vue3-lowcode/',
    name: 'http://wangbaoqi1.gitee.io/vite-vue3-lowcode/',
    component: RouterView,
    meta: {
      title: 'H5低代码平台',
      icon: 'icon-externa-link',
      isExt: true,
    },
  },
];

export default routes;
