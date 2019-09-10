//axios 配置

import router from '../router'
import axios from 'axios'
import { Message } from 'element-ui'
axios.defaults.timeout = 20000; //响应时间

//Axios请求拦截器
axios.interceptors.request.use(config => {
    let loginToken = window.sessionStorage.getItem('loginToken'); //获取loginToken
    if (loginToken) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers['loginToken'] = loginToken;
        config.headers['Pragma'] = 'no-cache';
        config.headers['Cache-Control'] = 'no-cache';
        // config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        //console.log('interceptors config=',config)
    }
    return config
}, error => {
    Message.error({
        message: '请求失败，请检查网络并重试，如果故障依旧，请联系网络管理员'
    });
    return Promise.reject(error);
});

// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
    response => {
        //如果token失效
        if (response.data.code === 9500) {
            Message.error({
                message: '操作已超时，即将跳转至登录页'
            });
            setTimeout(function () {
                window.sessionStorage.removeItem('loginToken'); //清除loginToken
                window.location.href = '/';
            },2000);
        }

        return response;
    },
    error => {
        // Message.error({
        //     message: '请求已超时，远程服务器没有响应，请联系系统管理员'
        // });

        // if (error.response) {
        //     switch (error.response.status) {
        //         case 401:
        //             // 这里写清除token的代码
        //             router.push({
        //                 path: '/login',
        //                 //query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
        //             })
        //     }
        // }
        // return Promise.reject(error.response)
    }
);

//发送delete请求
export function $delete(url, params) {
    return axios({
        params: params,
        url: url,
        method: 'delete'
    })
}

//(发送get请求)
export function get(url, params, timeout) {
    return axios({
        url: url,
        params: params,
        method: 'get',
        timeout
        // timeout :time
    })
}

//(发送get请求)
export function post(url, data, timeout) {
    return axios({
        url: url,
        method: 'post',
        data: data,
        timeout :timeout
    })
}

export default axios;
