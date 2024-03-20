import type { App } from 'vue';
import { RoleEnum } from '@/enums/roleEnum';
import router from '@/router';
import { Storage } from '@/utils/Storage';

/**
 * 第一种权限验证形式
 */

/**
 * 判断是否拥有某种权限
 * @param {string} action
 * @param {boolean} include
 */
export const hasPermission = (action: string) => {
  const currentRoute = router.currentRoute.value;

  // 下面只是为了方便演示，不建议这么做
  action = `${currentRoute.path
    .split('/')
    .filter((m) => m.trim() != '')
    .join('.')}.${action}`;
  // console.log(action, currentRoute.meta.permission, '当前路由权限')
  // @ts-ignore
  return currentRoute.meta?.permission?.includes(action);

  // const permissions = currentRoute.meta.permission || []
  // if (include) {
  //     return permissions.some(item => item.action.includes(action))
  // } else {
  //     return permissions.some(item => item.action == action)
  // }
};
/**
 * 前端通过角色判断数据是否有权限
 * @param {[string]} roles
 */
export const hasRolePermission = (roles: RoleEnum[] = []) => {
  return true;
  const { roles: userRoles } = Storage.get('userInfo');
  const roleArr: RoleEnum[] = userRoles.map((val) => val.value);
  let flag = false;
  roles.forEach((val) => {
    roleArr.some(function (item) {
      if (item == val) {
        flag = true;
        return true;
      }
    });
  });
  //超管拥有所有权限
  if (roleArr.includes(RoleEnum.ADMIN)) {
    flag = true;
  }
  //不做角色限制的时候拥有所有权限
  if (roles.length === 0) {
    flag = true;
  }
  return flag;
};

// 暴露一个插件 API
const install = (app: App) => {
  // 在 this 上挂载一个贯穿方法，用 provider 也行
  app.config.globalProperties.$hasPermission = hasPermission;
};
export default install;
