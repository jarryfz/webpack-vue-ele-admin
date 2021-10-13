// 路由导航守卫
import router from './router'
// import { Message } from 'element-ui'
import wsCache from './cache'
// 路由白名单
const whiteList = ['/login']
// 全局路由前置守卫
router.beforeEach((to, from, next) => {
  const token = wsCache.get('token')
  if(token) {
    if(to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if(whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
