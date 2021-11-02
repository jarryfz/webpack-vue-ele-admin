import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'

import getters from './getters'
import tagsView from './modules/tags-view'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    tagsView
  },
  getters
})
