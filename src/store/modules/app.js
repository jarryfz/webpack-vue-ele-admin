import wsCache from '@/cache'
const app = {
  state: {
    title: 'webpack-vue-ele-admin',
    status: 0,
    token: wsCache.get('token'),
    isCollapse: false,
    userInfo: '',
    layout: 'classic' // 导航栏方式
  },
  getters: {
    doStatus: state => state.status + 1
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      wsCache.set('token', token)
    },
    SET_USERINFO: (state, info) => {
      state.userInfo = info
      wsCache.set('userInfo', info)
    },
    IS_COLLAPSE: (state) => {
      state.isCollapse = !state.isCollapse
    },
    SET_LAYOUT: (state, value) => {
      state.layout = value
    }
  },
  actions: {
    loginFun ({ commit }, params) {
      return new Promise((resolve, reject) => {
        try {
          commit('SET_TOKEN', 'token')
          commit('SET_USERINFO', {
            userName: params.userName,
            roleName: params.userName,
            roleId: params.userName === 'admin' ? '1' : '2'
          })
          resolve()
        } catch {
          reject()
        }
      })
    },
    // 左侧导航栏收缩
    isCollapseFun ({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          commit('IS_COLLAPSE')
          resolve()
        } catch {
          reject()
        }
      })
    },
    // 导航栏方式
    layout ({ commit }, value) {
      return new Promise((resolve, reject) => {
        try {
          commit('SET_LAYOUT', value)
          resolve()
        } catch {
          reject()
        }
      })
    }
  }
}
export default app
