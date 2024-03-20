import Api from './loginApi';

/**
 * @description 登录
 * @param {LoginParams} data
 * @returns
 */
export function login(parameter) {
  return Api.requestParam('/security/login', 'post', { ...parameter });
}
