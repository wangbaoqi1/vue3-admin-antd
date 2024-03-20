import API from '../login/loginApi';
import { request } from '@/utils/request';
import Api from '@/core/permission/modules/netdisk/manage';
export function netdiskManageList(parameter) {
  return API.requestParam(Api.list, 'get', { ...parameter });
}

export function mkdir(parameter) {
  return API.requestParam(Api.mkdir, 'post', { ...parameter });
}

export function getUploadToken(parameter) {
  return API.requestParam(Api.token, 'get', { ...parameter });
}

export function fileInfo(parameter) {
  return API.requestParam(Api.info, 'post', { ...parameter });
}
export function fileMark(parameter) {
  return API.requestParam(Api.mark, 'post', { ...parameter });
}

export function downloadFile(parameter) {
  return API.requestParam(Api.download, 'post', { ...parameter });
}
export function renameFile(parameter) {
  return API.requestParam(Api.rename, 'post', { ...parameter });
}

export function delFileOrDir(parameter) {
  return API.requestParam(Api.delete, 'post', { ...parameter });
}

export function fileBatchCut(parameter) {
  return API.requestParam(Api.cut, 'post', { ...parameter });
}

export function fileBatchCopy(parameter) {
  return API.requestParam(Api.copy, 'post', { ...parameter });
}
