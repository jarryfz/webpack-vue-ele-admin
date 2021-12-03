import axios from 'axios'
import config from './config'
import wsCache from '@/cache'

const service = axios.create({
  baseURL: config.base_url[process.env.API_CURENV],
  timeout: 5000
})
service.interceptors.request.use(
  config => {
    if (wsCache.get('token')) {
      config.headers.token = wsCache.get('token')
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
export default service
