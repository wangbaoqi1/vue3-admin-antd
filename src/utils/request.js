import axios from 'axios';
import { notification } from 'ant-design-vue';
import { VueAxios } from './axios';
import { useUserStore } from '@/store/modules/user';
import { Storage } from '@/utils/Storage';
import { ACCESS_TOKEN } from '@/enums/cacheEnum';

/** 真实请求的路径前缀 */
const baseApiUrl = import.meta.env.VITE_BASE_API;
/** mock请求路径前缀 */
const baseMockUrl = import.meta.env.VITE_MOCK_API;
const service = axios.create({
  baseURL: baseApiUrl, // api base_url
  timeout: 60000, // 请求超时时间
});

const err = (error) => {
  // 创建 axios 实例
  const userStore = useUserStore();
  if (error.response) {
    if (error.response.status === 403) {
      notification.error({
        message: '请求错误',
        description: 'GoogleAuth已失效',
      });
      setTimeout(() => {
        window.localStorage.clear();
        window.location.reload();
      }, 3000);
    } else if (error.response.status === 401) {
      notification.error({
        message: '请求错误',
        description: '会话已失效，请重新登录',
      });
      userStore.logout().then(() => {
        setTimeout(() => {
          window.localStorage.clear();
          window.location.reload();
        }, 3000);
      });
    } else {
      const message = ((error.response || {}).data || {}).message || '请求出现错误，请稍后再试';
      notification.error({
        message: '请求错误',
        description: message,
      });
    }
  }
  return Promise.reject(error);
};

// request interceptor
service.interceptors.request.use((config) => {
  console.log('con1111111111', config);
  if (
    (config.data && config.data.includes('isMock')) ||
    (config.url && config.url.includes('isMock'))
  ) {
    config.baseURL = baseMockUrl;
  }
  const token = Storage.get(ACCESS_TOKEN);
  if (token) {
    config.headers['Access-Token'] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config;
}, err);

// response interceptor
service.interceptors.response.use((response) => {
  if (response.status !== 200) {
    const err = {
      response,
    };
    const message = ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试';
    notification.error({
      message: '请求错误',
      description: message,
    });
    return Promise.reject(err);
  }
  return response.data;
}, err);

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, service);
  },
};

export { installer as VueAxios, service as axios };
