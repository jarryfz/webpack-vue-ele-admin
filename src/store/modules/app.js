import wsCache from '@/cache'
const app = {
  state: {
    title: 'webpack-vue-ele-admin',
    status: 0,
    token: wsCache.get('token'),
    isCollapse: false,
    layout: 'classic' // 导航栏方式
  },
  getters: {
    doStatus: state => state.status + 1
  },
  mutations: {
    ADD_FUN: (state, value) => {
      state.status = state.status + value
    },
    REDUCTION_FUN: (state, value) => {
      state.status = state.status - value
    },
    SET_TOKEN: (state, token) => {
      state.token = token
      wsCache.set('token', token)
    },
    IS_COLLAPSE: (state) => {
      state.isCollapse = !state.isCollapse
    },
    SET_LAYOUT: (state, value) => {
      state.layout = value
    }
  },
  actions: {
    addFun ({ commit }, value) {
      commit('ADD_FUN', value)
    },
    reductionFun ({ commit }, value) {
      commit('REDUCTION_FUN', value)
    },
    loginFun ({ commit }, params) {
      return new Promise((resolve, reject) => {
        try {
          commit('SET_TOKEN', 'token')
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
