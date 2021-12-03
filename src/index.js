import Vue from 'vue'
import App from './App'
import router from './router'

// import 'element-ui/lib/theme-chalk/index.css'
import './element/index'
import './styles/index.less'

import './permision'
import store from './store/index'
import '@/assets/icon'
import './mock/index'
import api from './api/index'

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.prototype.$api = api

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
