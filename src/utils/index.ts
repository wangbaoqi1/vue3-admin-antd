import CryptoJS from 'crypto-js';
import { isObject } from './is';
import type { App, Component, Plugin } from 'vue';

export function getFileExtension(filename) {
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)?.[0] : undefined;
}
/**
 * 将文件文件名转为文件类型后缀
 * @param {string} fileName mime type
 * @returns svg icon name
 */
export function parseMimeTypeToIconName(fileName) {
  if (!fileName) {
    return 'file-type-unknown';
  }
  const ext = getFileExtension(fileName)?.toLowerCase();
  if (!ext) {
    return 'file-type-unknown';
  }
  if (['png', 'jpg', 'jpeg', 'ico', 'gif', 'bmp', 'webp'].includes(ext)) {
    return 'file-type-img';
  }
  if (['markdown', 'md', 'txt'].includes(ext)) {
    return 'file-type-txt';
  }
  if (['docx', 'doc', 'docm', 'dot', 'dotx'].includes(ext)) {
    return 'file-type-docx';
  }
  if (['csv', 'xls', 'xlsb', 'xlsm', 'xlsx', 'xltx'].includes(ext)) {
    return 'file-type-excel';
  }
  if (ext === 'pdf') {
    return 'file-type-pdf';
  }
  if (['pptx', 'ppt', 'pptm'].includes(ext)) {
    return 'file-type-ppt';
  }
  if (['zip', 'rar', '7z', 'tar', 'gz', 'tgz', 'tar.gz', 'tar.xz'].includes(ext)) {
    return 'file-type-zip';
  }
  if (['mp4', 'avi', 'wmv', 'rmvb', '3gp', 'mov', 'm4v', 'flv', 'mkv'].includes(ext)) {
    return 'file-type-video';
  }
  if (['mp3', 'wav'].includes(ext)) {
    return 'file-type-music';
  }
  if (
    ['vue', 'js', 'go', 'java', 'ts', 'css', 'html', 'php', 'c', 'cpp', 'swift', 'kt'].includes(ext)
  ) {
    return 'file-type-code';
  }
  return 'file-type-unknown';
}

/**
 *
 * byte to size
 * @param {number} bytes file size
 */
export function formatSizeUnits(bytes: number, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}

export const withInstall = <T>(component: Component<T>, alias?: string) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as T & Plugin;
};

const keyValue = 'cjokpopl';
// 加密函数
export function encryptData(data: any, key: string = keyValue) {
  // 将密钥转换成 128 位的十六进制字符串
  const keyHex = CryptoJS.enc.Utf8.parse(key);
  // 使用 AES 加密算法对数据进行加密
  const encrypted = CryptoJS.AES.encrypt(data, keyHex, {
    mode: CryptoJS.mode.ECB, // 使用 ECB 模式进行加密
    padding: CryptoJS.pad.Pkcs7, // 使用 PKCS7 填充
  });
  // 返回加密后的密文
  return encrypted.toString();
}

// 解密函数
export function decryptData(encryptedData: any, key: string = keyValue) {
  // 将密钥转换成 128 位的十六进制字符串
  const keyHex = CryptoJS.enc.Utf8.parse(key);
  // 使用 AES 解密算法对数据进行解密
  const decrypted = CryptoJS.AES.decrypt(encryptedData, keyHex, {
    mode: CryptoJS.mode.ECB, // 使用 ECB 模式进行解密
    padding: CryptoJS.pad.Pkcs7, // 使用 PKCS7 填充
  });
  // 将解密后的数据转换为字符串并返回
  return decrypted.toString(CryptoJS.enc.Utf8);
}
