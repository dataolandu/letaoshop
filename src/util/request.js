import axios from 'axios'
import qs from 'qs'
import {  Message } from 'element-ui'

axios.defaults.timeout = 300000
axios.defaults.withCredentials = false
axios.defaults.baseURL = process.env.VUE_APP_BASE_API // 基础地址

// 请求拦截器
axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = token // 携带权限参数
    }
    // get请求，过滤空参数
    if (config.method === 'get' && config.params) {
      for (let p in config.params) {
        const param = config.params[p]
        if (param === undefined || param === null || String(param).length <= 0) {
          delete config.params[p]
        }
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.code == 0) {
      return response
    } else if (response.code == -1) {
      Message({
        message: response.msg,
        type: 'error'
      })
      return response
    } else {
      return response
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

/**
 * 封装get请求
 * @param url
 * @param data
 */
export function get(url, params = {}, others) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params,
      ...others
    }, {
      withCredentials: true
    })
      .then(response => {
        // if (!response) { return false }
        resolve(response.data)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}, config = {
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' // 设置跨域头部
  },
  withCredentials: true
}) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data), config)
      .then(response => {
        // if (!response) { return false }
        resolve(response.data)
      }, err => {
        console.log(err)
        reject(err)
      })
  })
}

