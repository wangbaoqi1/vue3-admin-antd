import { resultPageSuccess } from '../_util';

import data from './_reqLog.data';
import type { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/mock-api/sys/log/req/page',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, limit = 10 } = query;
      return resultPageSuccess(page, limit, data);
    },
  },
  {
    url: '/mock-api/captcha/img',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, limit = 10 } = query;
      return resultPageSuccess(page, limit, data);
    },
  },
  {
    url: '/mock-api/login',
    timeout: 1000,
    method: 'post',
    response: ({ query }) => {
      return {
        data: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsInB2IjoxLCJyb2xlcyI6WyJhZG1pbiJdLCJpYXQiOjE3MTA1NjA1MzgsImV4cCI6MTcxMDY0NjkzOH0.glGCZxt-vuPYpzz2gtBpB8Vy9gI5mnMSsvTf2kJvGfk',
        },
        code: 200,
        message: 'success',
      };
    },
  },
  {
    url: '/mock-api/account/permmenu',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      return {
        data: [
          {
            id: 12,
            path: '/document',
            component: '',
            name: '文档',
            meta: {
              title: '文档',
              icon: 'ion:tv-outline',
              isExt: false,
              extOpenMode: 1,
              type: 0,
              orderNo: 2,
              show: 1,
              activeMenu: null,
              status: 1,
              keepAlive: 0,
            },
            redirect: 'https://www.typeorm.org/',
            children: [
              {
                id: 14,
                path: 'https://www.typeorm.org/',
                name: 'Typeorm中文文档(外链)',
                meta: {
                  title: 'Typeorm中文文档(外链)',
                  icon: '',
                  isExt: true,
                  extOpenMode: 1,
                  type: 1,
                  orderNo: 3,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0,
                },
              },
              {
                id: 15,
                path: 'https://docs.nestjs.cn/',
                name: 'Nest.js中文文档(内嵌)',
                meta: {
                  title: 'Nest.js中文文档(内嵌)',
                  icon: '',
                  isExt: true,
                  extOpenMode: 2,
                  type: 1,
                  orderNo: 4,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0,
                },
              },
              {
                id: 112,
                path: 'https://antdv.com/components/overview-cn',
                name: 'antdv文档(内嵌)',
                meta: {
                  title: 'antdv文档(内嵌)',
                  icon: '',
                  isExt: true,
                  extOpenMode: 2,
                  type: 1,
                  orderNo: 255,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0,
                },
              },
            ],
          },
          {
            id: 1,
            path: '/system',
            component: '',
            name: '系统管理',
            meta: {
              title: '系统管理',
              icon: 'ant-design:setting-outlined',
              isExt: false,
              extOpenMode: 1,
              type: 0,
              orderNo: 254,
              show: 1,
              activeMenu: null,
              status: 1,
              keepAlive: 0,
            },
            redirect: '/system/user',
            children: [
              {
                id: 2,
                path: '/system/user',
                name: '用户管理',
                component: 'system/user/index',
                meta: {
                  title: '用户管理',
                  icon: 'ant-design:user-outlined',
                  isExt: false,
                  extOpenMode: 1,
                  type: 1,
                  orderNo: 0,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0,
                },
              },
              {
                id: 3,
                path: '/system/role',
                name: '角色管理',
                component: 'system/role/index',
                meta: {
                  title: '角色管理',
                  icon: 'ep:user',
                  isExt: false,
                  extOpenMode: 1,
                  type: 1,
                  orderNo: 1,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0,
                },
              },
              {
                id: 4,
                path: '/system/menu',
                name: '菜单管理',
                component: 'system/menu/index',
                meta: {
                  title: '菜单管理',
                  icon: 'ep:menu',
                  isExt: false,
                  extOpenMode: 1,
                  type: 1,
                  orderNo: 2,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0,
                },
              },
              {
                id: 61,
                path: '/system/dept',
                name: '部门管理',
                component: 'system/dept/index',
                meta: {
                  title: '部门管理',
                  icon: 'ant-design:deployment-unit-outlined',
                  isExt: false,
                  extOpenMode: 1,
                  type: 1,
                  orderNo: 3,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0,
                },
              },
              {
                id: 56,
                path: '/system/dict-type',
                name: '字典管理',
                component: 'system/dict-type/index',
                meta: {
                  title: '字典管理',
                  icon: 'ant-design:book-outlined',
                  isExt: false,
                  extOpenMode: 1,
                  type: 1,
                  orderNo: 4,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0,
                },
              },
              {
                id: 5,
                path: '/system/monitor',
                component: '',
                name: '系统监控',
                meta: {
                  title: '系统监控',
                  icon: 'ep:monitor',
                  isExt: false,
                  extOpenMode: 1,
                  type: 0,
                  orderNo: 5,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0,
                },
                redirect: '/system/monitor/online',
                children: [
                  {
                    id: 6,
                    path: '/system/monitor/online',
                    name: '在线用户',
                    component: 'system/monitor/online/index',
                    meta: {
                      title: '在线用户',
                      icon: '',
                      isExt: false,
                      extOpenMode: 1,
                      type: 1,
                      orderNo: 0,
                      show: 1,
                      activeMenu: null,
                      status: 1,
                      keepAlive: 0,
                    },
                  },
                  {
                    id: 7,
                    path: '/sys/monitor/login-log',
                    name: '登录日志',
                    component: 'system/monitor/log/login/index',
                    meta: {
                      title: '登录日志',
                      icon: '',
                      isExt: false,
                      extOpenMode: 1,
                      type: 1,
                      orderNo: 0,
                      show: 1,
                      activeMenu: null,
                      status: 1,
                      keepAlive: 0,
                    },
                  },
                  {
                    id: 68,
                    path: '/health',
                    name: '健康检查',
                    component: '',
                    meta: {
                      title: '健康检查',
                      icon: '',
                      isExt: false,
                      extOpenMode: 1,
                      type: 1,
                      orderNo: 4,
                      show: 0,
                      activeMenu: null,
                      status: 1,
                      keepAlive: 0,
                    },
                  },
                  {
                    id: 8,
                    path: '/system/monitor/serve',
                    name: '服务监控',
                    component: 'system/monitor/serve/index',
                    meta: {
                      title: '服务监控',
                      icon: '',
                      isExt: false,
                      extOpenMode: 1,
                      type: 1,
                      orderNo: 4,
                      show: 1,
                      activeMenu: null,
                      status: 1,
                      keepAlive: 0,
                    },
                  },
                ],
              },
              {
                id: 9,
                path: '/system/schedule',
                component: '',
                name: '任务调度',
                meta: {
                  title: '任务调度',
                  icon: 'ant-design:schedule-filled',
                  isExt: false,
                  extOpenMode: 1,
                  type: 0,
                  orderNo: 6,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0,
                },
                redirect: '/system/task',
                children: [
                  {
                    id: 10,
                    path: '/system/task',
                    name: '任务管理',
                    component: 'system/schedule/task/index',
                    meta: {
                      title: '任务管理',
                      icon: '',
                      isExt: false,
                      extOpenMode: 1,
                      type: 1,
                      orderNo: 0,
                      show: 1,
                      activeMenu: null,
                      status: 1,
                      keepAlive: 0,
                    },
                  },
                  {
                    id: 11,
                    path: '/system/task/log',
                    name: '任务日志',
                    component: 'system/schedule/log/index',
                    meta: {
                      title: '任务日志',
                      icon: '',
                      isExt: false,
                      extOpenMode: 1,
                      type: 1,
                      orderNo: 0,
                      show: 1,
                      activeMenu: null,
                      status: 1,
                      keepAlive: 0,
                    },
                  },
                ],
              },
              {
                id: 107,
                path: 'system/dict-item/:id',
                name: '字典项管理',
                component: 'system/dict-item/index',
                meta: {
                  title: '字典项管理',
                  icon: 'ant-design:facebook-outlined',
                  isExt: false,
                  extOpenMode: 1,
                  type: 1,
                  orderNo: 255,
                  show: 0,
                  activeMenu: '字典管理',
                  status: 1,
                  keepAlive: 0,
                },
              },
              {
                id: 86,
                path: '/param-config',
                name: '参数配置',
                component: 'system/param-config/index',
                meta: {
                  title: '参数配置',
                  icon: 'ep:edit',
                  isExt: false,
                  extOpenMode: 1,
                  type: 1,
                  orderNo: 255,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0,
                },
              },
            ],
          },
          {
            id: 48,
            path: '/tool',
            component: '',
            name: '系统工具',
            meta: {
              title: '系统工具',
              icon: 'ant-design:tool-outlined',
              isExt: false,
              extOpenMode: 1,
              type: 0,
              orderNo: 254,
              show: 1,
              activeMenu: null,
              status: 1,
              keepAlive: 0,
            },
            redirect: '/tool/email',
            children: [
              {
                id: 49,
                path: '/tool/email',
                name: '邮件工具',
                component: 'tool/email/index',
                meta: {
                  title: '邮件工具',
                  icon: 'ant-design:send-outlined',
                  isExt: false,
                  extOpenMode: 1,
                  type: 1,
                  orderNo: 1,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0,
                },
              },
              {
                id: 51,
                path: '/tool/storage',
                name: '存储管理',
                component: 'tool/storage/index',
                meta: {
                  title: '存储管理',
                  icon: 'ant-design:appstore-outlined',
                  isExt: false,
                  extOpenMode: 1,
                  type: 1,
                  orderNo: 2,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0,
                },
              },
            ],
          },
          {
            id: 115,
            path: 'netdisk',
            component: null,
            name: '网盘管理',
            meta: {
              title: '网盘管理',
              icon: 'ant-design:cloud-server-outlined',
              isExt: false,
              extOpenMode: 1,
              type: 0,
              orderNo: 255,
              show: 1,
              activeMenu: null,
              status: 1,
              keepAlive: 0,
            },
            redirect: 'manage',
            children: [
              {
                id: 116,
                path: 'manage',
                name: '文件管理',
                component: 'netdisk/manage',
                meta: {
                  title: '文件管理',
                  icon: '',
                  isExt: false,
                  extOpenMode: 1,
                  type: 1,
                  orderNo: 252,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0,
                },
              },
              {
                id: 127,
                path: 'overview',
                name: '网盘概览',
                component: 'netdisk/overview',
                meta: {
                  title: '网盘概览',
                  icon: '',
                  isExt: false,
                  extOpenMode: 1,
                  type: 1,
                  orderNo: 254,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0,
                },
              },
            ],
          },
          {
            id: 43,
            path: '/about',
            name: '关于',
            component: 'account/about',
            meta: {
              title: '关于',
              icon: 'ant-design:info-circle-outlined',
              isExt: false,
              extOpenMode: 1,
              type: 1,
              orderNo: 260,
              show: 1,
              activeMenu: null,
              status: 1,
              keepAlive: 0,
            },
          },
        ],
        code: 200,
        message: 'success',
      };
    },
  },
  {
    url: '/mock-api/account/info',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      return {
        data: {
          id: 1,
          createdAt: '2023-11-09T16:31:44.104Z',
          updatedAt: '2024-01-29T01:49:43.000Z',
          username: 'admin',
          nickname: 'bqy',
          avatar: '',
          qq: '1028368131',
          email: '1028368131@qq.com',
          phone: '10086',
          remark: '管理员',
          status: 1,
          roles: [
            {
              id: 1,
              createdAt: '2023-11-09T16:31:44.058Z',
              updatedAt: '2024-01-28T13:08:39.000Z',
              name: '管理员',
              value: 'user',
              remark: '超级管理员',
              status: 1,
              default: null,
            },
          ],
        },
        code: 200,
        message: 'success',
      };
    },
  },
  {
    url: '/mock-api/account/logout',
    timeout: 1000,
    method: 'post',
    response: ({ query }) => {
      return { data: null, code: 200, message: 'success' };
    },
  },
] as MockMethod[];
