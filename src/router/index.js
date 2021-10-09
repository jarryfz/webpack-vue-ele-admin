import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const constantRouterMap = [
  {
    name: 'Home',
    path: '/',
    component: () => import('_v/Home/index'), // 需要添加 @babel/plugin-syntax-dynamic-import 插件 不然import报错
    meta: {
      title: '首页'
    }
  }
]
const createRouter = () => new VueRouter({
  routes: constantRouterMap
})

const router = createRouter()
export default router
