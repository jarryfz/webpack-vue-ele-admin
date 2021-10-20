import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import table from './modules/table.js'

Vue.use(VueRouter)

export const constantRouterMap = [
  {
    name: '404',
    path: '/404',
    component: () => import('_v/404'),
    hidden: true
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('_v/Login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout, // 需要添加 @babel/plugin-syntax-dynamic-import 插件 不然import报错
    redirect: '/dashboard',
    meta: {
      title: 'Dashboard',
      icon: 'dashboard'
    },
    children: [
      {
        path: '/dashboard',
        name: 'Home',
        component: () => import('_v/Home/index'),
        meta: {
          title: '首页'
        }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true },
  table
]
const createRouter = () => new VueRouter({
  routes: constantRouterMap
})

const router = createRouter()
export default router
