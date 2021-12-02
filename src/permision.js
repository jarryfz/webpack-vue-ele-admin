// 路由导航守卫
import router from './router'
// import { Message } from 'element-ui'
import wsCache from './cache'
import store from './store/index'
// 路由白名单
const whiteList = ['/login']
// 全局路由前置守卫
router.beforeEach((to, from, next) => {
  const token = wsCache.get('token')
  if(token) {
    if(to.path === '/login') {
      next('/')
    } else {
      if (store.getters.isAddRouters) {
        next()
        return
      }
      store.dispatch('generateRoutes').then(() => {
        router.addRoutes(store.getters.addRoutes)
      })
      const redirectPath = from.query.redirect || to.path
      const redirect = decodeURIComponent(redirectPath)
      const nextData =
        to.path === redirect ? { ...to, replace: true } : { path: redirect }
      store.dispatch('setIsAddRoutes', true)
      next(nextData)
    }
  } else {
    if(whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
