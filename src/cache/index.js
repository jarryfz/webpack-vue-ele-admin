/**
 * 配置浏览器本地存储方式，可直接存储对象数组
*/
import WebStorageCache from 'web-storage-cache'

const wsCache = new WebStorageCache({
  storage: 'sessionStorage'
})

export default wsCache
