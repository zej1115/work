//axios 配置
import Vue from 'vue'
import router from '../router'
import axios from 'axios'
import store from '../vuex/store'
import { Message, MessageBox } from 'element-ui'
// axios.defaults.baseURL = '/'; // baseURL
// axios.defaults.baseURL = '/'; // baseURL
// axios.defaults.baseURL = '/apis'; // baseURL
//axios.defaults.timeout = 10000;

//Axios请求拦截器
axios.interceptors.request.use(config => {
  let loginToken = window.sessionStorage.getItem('loginToken'); //获取loginToken
  if (loginToken) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers['loginToken'] = loginToken
  }
  return config
}, error => {
  return Promise.reject(error);
});


axios.interceptors.response.use((res) => {
  return res;
}, (error) => {
  if (error.response) {
    Message({
      type: 'error',
      message: error.response.data.explain
    });
    
    return Promise.reject(error.response);
  }
});

//(发送delete请求) // url = /admin/user/{id}?loginToken={loginToken}
export function del(url, timeout) {
  // if(url.valueOf('{id}')) url.replace('{id}',id);
  // if(url.valueOf('{loginToken}')) url.replace('{loginToken}',window.sessionStorage.getItem('loginToken'));
  /*let params = {
    loginToken: store.state.loginToken
  };*/
  
  return axios({
    url: url,
    params: params,
    method: 'delete',
    timeout: timeout
  })
}

//(发送put请求)
export function put(url, data, id, timeout) {
  let params = {
    loginToken: store.state.loginToken
  };
  
  return axios({
    url: url,
    data: data,
    method: 'put',
    params: params,
    timeout: timeout
  })
}

//(发送get请求)
export function get(url, params, id, timeout) {
  if(url.valueOf('{id}') !== -1) url = url.replace('{id}', id);
  if(url.valueOf('{loginToken}') !== -1) url = url.replace('{loginToken}',window.sessionStorage.getItem('loginToken'));
  return axios({
    url: url,
    params: params,
    method: 'get',
    timeout: timeout
  })
}

//(发送post请求)
export function post(url, data, timeout) {
  /*let params = {
    loginToken: store.state.loginToken
  };*/
  
  return axios({
    url: url,
    method: 'post',
    data: data,
    // params: params,
    timeout :timeout
  })
}

//格式化get查询字符串
export function formatGetUrl (obj) {
  if (typeof(obj) === 'object') {
    let str = '';
    let getUrl = '';
    for (let i in obj) {
      if (obj[i] || obj[i] === 0 || obj[i] === '0' ) {
        str += i + '=' + encodeURIComponent(obj[i]) + '&'
      }
    }
    return str.replace(/&$/g,'');
  }
}

export default axios;
