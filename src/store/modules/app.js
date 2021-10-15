import wsCache from '@/cache'
const app = {
  state: {
    title: 'webpack-vue-ele-admin',
    status: 0,
    token: wsCache.get('token'),
    isCollapse: false
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
    isCollapseFun ({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          commit('IS_COLLAPSE')
          resolve()
        } catch {
          reject()
        }
      })
    }
  }
}
export default app
