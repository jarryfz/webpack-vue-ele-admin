import wsCache from '@/cache'
const app = {
  state: {
    status: 0,
    token: wsCache.get('token')
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
    }
  }
}
export default app
