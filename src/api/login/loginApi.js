import Qs from 'qs';
import dayjs from 'dayjs';
import { axios } from '@/utils/request';

const Api = {
  // 以get/post请求发送HTTP消息主体中的字符串（名称/值对），后端使用@RequestParam接收数据
  requestParam(url, method, parameter, mfaCode) {
    method = method.toLowerCase();
    if (method === 'get') {
      const params = Qs.stringify(parameter, {
        arrayFormat: 'repeat',
        filter: (prefix, value) => {
          if (dayjs.isDayjs(value)) {
            return value.toISOString();
          }
          return value;
        },
      });
      return axios.get(`${url}?${params}`, {
        // 设置header信息
        headers: { 'X-Ca-Mfa-Code': mfaCode },
      });
    } else if (method === 'post') {
      return axios.post(
        url,
        Qs.stringify(parameter, {
          arrayFormat: 'repeat',
          filter: (prefix, value) => {
            if (dayjs.isDayjs(value)) {
              return value.toISOString();
            }
            return value;
          },
        }),
        {
          // 设置header信息
          headers: { 'X-Ca-Mfa-Code': mfaCode },
        },
      );
    } else {
      return axios({
        url,
        method,
        data: parameter,
        // 设置header信息
        headers: { 'X-Ca-Mfa-Code': mfaCode },
      });
    }
  },

  // 以post请求发送HTTP消息主体中的数据(JSON)，后端使用@RequestBody接收数据
  requestBody(url, data, mfaCode) {
    return axios({
      url,
      method: 'post',
      data,
      headers: { 'X-Ca-Mfa-Code': mfaCode },
    });
  },

  // 以post请求发送文件，后端使用MultipartFile接收数据
  upload(url, param) {
    return axios.post(url, param, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  open(url, parameter) {
    const params = Qs.stringify(parameter, {
      arrayFormat: 'repeat',
      filter: (prefix, value) => {
        if (dayjs.isDayjs(value)) {
          return value.toISOString();
        }
        return value;
      },
    });
    window.open(`${axios.defaults.baseURL + url}?${params}`, '_blank');
  },
};
export default Api;
