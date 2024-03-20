import type { RouteRecordRaw } from 'vue-router';
import { t } from '@/hooks/useI18n';

const moduleName = 'app';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/app',
    name: moduleName,
    redirect: '/app',
    meta: {
      title: t('routes.app.manage'),
      icon: 'icon-yibiaopan',
    },
    children: [
      {
        path: 'version',
        name: `${moduleName}-version`,
        meta: {
          title: t('routes.app.version'),
          icon: 'icon-shouye',
        },
        component: () =>
          import(/* webpackChunkName: "app-version" */ '@/views/app/version/index.vue'),
      },
    ],
  },
];

export default routes;
