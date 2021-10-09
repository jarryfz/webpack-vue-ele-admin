import Vue from 'vue'
import App from './App'
import router from './router'

// import 'element-ui/lib/theme-chalk/index.css'
import './element/index'
import './styles/index.less'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
