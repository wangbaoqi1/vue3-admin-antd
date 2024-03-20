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

export const objToArr = (obj: Record<string, any>) => {
  return Object.entries(obj).map(([key, value]) => ({ label: value, value: key }));
};

// 用于模拟接口请求
export const getRemoteTableData = (data = [], time = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const retObj = {
        list: data,
        total: 100,
        pageSize: 10,
        pageNum: 1,
      };
      resolve(retObj);
    }, time);
  });
};

// 指定范围随机数
export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// 判断空值
export const isEmpty = (value) => {
  if (Array.isArray(value)) {
    return !value.length;
  } else if (Object.prototype.toString.call(value) === '[object Object]') {
    return !Object.keys(value).length;
  } else {
    return [null, undefined, ''].includes(value);
  }
};

//  数字格式化
export const formatNumber = (num) =>
  num ? `${num}`.replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,') : isEmpty(num) ? '' : 0;

// 百分比格式化
export const formatPercent = (percent, n = 2) =>
  isEmpty(percent) ? '' : `${(+percent).toFixed(n)}%`;

// 金额格式化
export const formatMoney = (num) => (isEmpty(num) ? '' : formatNumber(num.toFixed(2)));
