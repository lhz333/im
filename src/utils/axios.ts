import Axios from 'axios'
import config from '../config/config'

// 创建 axios 实例
const axios = Axios.create({
  // API 请求的默认前缀
  baseURL: config.BASE_API_URL,
  // 请求超时时间
  timeout: 20000
})

// 前置拦截器 发起请求之前的拦截
axios.interceptors.request.use(
  (configs) => {
    return configs
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器 获取到响应时的拦截
axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axios
