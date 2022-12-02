import axios from 'axios'
// 引入路由
import router from '@/router'
import {
  Message
} from 'element-ui'
// create an axios instance

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 请求拦截器 统一注入token
service.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json'
  // 如果有token
  // if (store.getters.token) {
  //   //  判断token是否过期
  //   if (Date.now() - gettime() > 10000000) {
  //     router.push('/login')
  //     return Promise.reject(new Error('登录过期'))
  //   }
  //   //   统一注入token
  //   config.headers['Authorization'] = `Bearer ${store.getters.token}`
  // }
  //  一定要return
  return config
}, err => {
  //   主动接入token超时
  // if (err.response && err.response.data && err.response.data.code === 10002) {
  //   router.push('/login')
  // } else {
  //   Message.error(err.message)
  // }
  return Promise.reject(err)
})

// 响应拦截器
service.interceptors.response.use(response => {
  if (response.status === 200) {
    return response.data
  } else {
    return response
  }
  // 请求回来的数据在这里先过一道
  //    响应体回来
  // 对响应体做点什么
  // 结构赋值 结构请求回来的数据
  // const {
  //   code,
  //   msg,
  //   result

  // } = response.data

  //   判断是否请求成功
  // if (msg === '操作成功') {
  //   // 返回数据
  //   return result
  // } else {
  //   //  抛出错误
  //   // Message.error('请求错误');

  //   // 将业务推进到cath阶段
  //   return Promise.reject(new Error(msg))
  // }

}, err => {
  // 提示错误信息
  // Message.error(err.msg)
  // 请求失败抛出错误
  return Promise.reject(err)
}) // 响应拦截器
export default service // 导出axios实例
