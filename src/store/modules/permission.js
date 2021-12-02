import { asyncRouterMap, constantRouterMap, mockRouterMap } from '@/router'
import { deepClone } from '@/utils/index'
import wsCache from '@/cache'

const permission = {
  state: {
    isAddRouters: false,
    routes: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTERS: (state, routes) => {
      state.addRoutes = routes
      state.routes = deepClone(constantRouterMap.concat(routes))
    },
    SET_IS_ADDROUTES: (state, value) => {
      state.isAddRouters = value
    }
  },
  actions: {
    generateRoutes ({ commit }, roles) {
      return new Promise((resolve, reject) => {
        try {
          const info = wsCache.get('userInfo')
          console.log(info)
          if(info.roleName === 'admin') {
            const routes = deepClone(asyncRouterMap, ['component'])
            commit('SET_ROUTERS', routes)
          } else {
            const routes = deepClone(mockRouterMap, ['component'])
            commit('SET_ROUTERS', routes)
          }
          resolve()
        } catch {
          reject()
        }
      })
    },
    setIsAddRoutes ({ commit }, value) {
      return new Promise((resolve, reject) => {
        try {
          commit('SET_IS_ADDROUTES', value)
          resolve()
        } catch {
          reject()
        }
      })
    }
  }
}
export default permission
