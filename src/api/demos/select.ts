import Api from '../login/loginApi';

/**
 * @description Get sample options value
 */

export function optionsListApi(parameter) {
  return Api.requestParam('/select/getDemoOptions', 'get', { ...parameter });
}
