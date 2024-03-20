import Api from '../login/loginApi';

/**
 * @description 获取王者荣耀英雄列表
 */
export function getWzryHeroList(parameter) {
  return Api.requestParam('/demos/wzry/hero_list', 'get', { ...parameter });
}

/**
 * @description 获取英雄联盟英雄列表
 */
export function getLolHeroList(parameter) {
  return Api.requestParam('/demos/lol/hero_list', 'post', { ...parameter });
}

/**
 * @description 获取英雄联盟英雄列表
 */
export function getLolHeroInfo(parameter) {
  return Api.requestParam('/demos/lol/hero_info', 'post', { ...parameter });
}
