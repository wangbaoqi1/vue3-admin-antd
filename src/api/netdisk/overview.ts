import Api from '../login/loginApi';

export function getNetdiskDesc(parameter) {
  return Api.requestParam('netdisk/overview/desc', 'get', { ...parameter });
}
