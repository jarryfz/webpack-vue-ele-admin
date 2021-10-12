const app = {
  state: {
    status: 0
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
    }
  },
  actions: {
    addFun ({ commit }, value) {
      commit('ADD_FUN', value)
    },
    reductionFun ({ commit }, value) {
      commit('REDUCTION_FUN', value)
    }
  }
}
export default app
