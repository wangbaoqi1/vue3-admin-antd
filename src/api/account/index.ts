import Api from '../login/loginApi';

export function updateAccountInfo(parameter) {
  return Api.requestParam('account/update', 'post', parameter);
}

export function updatePassword(parameter) {
  return Api.requestParam('account/password', 'post', parameter);
}

export function getInfo(parameter) {
  return Api.requestParam('account/info', 'get', { ...parameter, isMock: true });
}

export function permmenu(parameter) {
  return Api.requestParam('account/permmenu', 'post', parameter);
}
export function logout(parameter) {
  return Api.requestParam('count/logout', 'post', { ...parameter, isMock: true });
}
