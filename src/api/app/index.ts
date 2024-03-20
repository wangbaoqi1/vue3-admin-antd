import Api from '../login/loginApi';

/**
 * @description Get sample options value
 */
export function appVersionDelApi(parameter) {
  return Api.requestParam('/app-version/delete', 'post', parameter);
}

export function appVersionSavaApi(parameter) {
  return Api.requestParam('/app-version/save', 'post', parameter);
}

export function appVersionFindApi(parameter) {
  return Api.requestParam('/app-version/find', 'get', { ...parameter, isMock: true });
}
