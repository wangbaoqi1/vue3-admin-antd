import { defineStore } from 'pinia';
//wesokit
// import { useWsStore } from './ws';
import type { RouteRecordRaw } from 'vue-router';
import { store } from '@/store';
import { login } from '@/api/login';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { logout, getInfo, permmenu } from '@/api/account';
import { generatorDynamicRouter } from '@/router/generator-router';
import { resetRouter } from '@/router';
import { hasRolePermission } from '@/utils/permission/hasPermission';

interface UserState {
  token: string;
  name: string;
  avatar: string;
  // like [ 'sys:user:add', 'sys:user:update' ]
  perms: string[];
  menus: RouteRecordRaw[];
  userInfo: Partial<API.AdminUserInfo>;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: Storage.get(ACCESS_TOKEN_KEY, null),
    name: 'amdin',
    avatar: '',
    perms: [],
    menus: [],
    userInfo: {},
  }),
  getters: {
    getToken(): string {
      return this.token;
    },
    getAvatar(): string {
      return this.avatar;
    },
    getName(): string {
      return this.name;
    },
    getPerms(): string[] {
      return this.perms;
    },
  },
  actions: {
    /** 清空token及用户信息 */
    resetToken() {
      this.avatar = this.token = this.name = '';
      this.perms = [];
      this.menus = [];
      this.userInfo = {};
      Storage.clear();
    },
    /** 登录成功保存token */
    setToken(token: string) {
      this.token = token ?? '';
      const ex = 7 * 24 * 60 * 60 * 1000;
      Storage.set(ACCESS_TOKEN_KEY, this.token, ex);
    },
    /** 登录 */
    async login(params: API.LoginParams) {
      try {
        const { data } = await login(params);
        this.setToken(data.token);
        return this.afterLogin();
      } catch (error) {
        return Promise.reject(error);
      }
    },
    /** 登录成功之后, 获取用户信息以及生成权限路由 */
    async afterLogin() {
      try {
        // WebSocket实时管理登入状态
        // const wsStore = useWsStore();
        // const [userInfo, data] = await Promise.all([getInfo(), permmenu()]);
        const userInfo = await getInfo();
        Storage.set('userInfo', userInfo, 7 * 24 * 60 * 60 * 2);
        // this.perms = perms;
        this.name = userInfo.name;
        this.avatar = userInfo.headImg;
        this.userInfo = userInfo;
        // 根据后端接口生成路由
        // const generatorResult = await generatorDynamicRouter(data);
        // 前端生成路由
        const generatorResult = await generatorDynamicRouter();
        const routerArr = generatorResult.menus.map((item) => {
          //没权限时隐藏菜单
          if (!hasRolePermission(item.meta?.permsRole || []) && item.meta) {
            item.meta.hideInMenu = true;
          }
          return item;
        });
        this.menus = routerArr.filter((item) => !item.meta?.hideInMenu);
        //websocket初始化
        // !wsStore.client && wsStore.initSocket();
        // return { menus, perms, userInfo };
        return { menus: this.menus, userInfo };
      } catch (error) {
        return Promise.reject(error);
        // return this.logout();
      }
    },
    /** 登出 */
    async logout() {
      await logout();
      //websocket断开链接
      // const wsStore = useWsStore();
      // wsStore.closeSocket();
      this.resetToken();
      resetRouter();
    },
  },
});

// 在组件setup函数外使用
export function useUserStoreWithOut() {
  return useUserStore(store);
}
