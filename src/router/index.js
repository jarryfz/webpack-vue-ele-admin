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
    name: 'Home',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/dashboard',
        name: '首页',
        component: () => import('_v/Home/index'),
        meta: {
          icon: 'icon-home',
          title: 'Dashboard'
        }
      }
    ]
  }
]
export const asyncRouterMap = [
  table,
  {
    path: '/test',
    component: Layout,
    redirect: '/test/permission',
    meta: {title: 'Test'},
    children: [
      {
        path: '/test/permission',
        name: '权限测试',
        component: () => import('_v/Test/permission.vue'),
        meta: {title: '权限测试', icon: 'icon-home'}
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
export const mockRouterMap = [
  table,
  // {
  //   path: '/test',
  //   component: Layout,
  //   redirect: '/test/permission',
  //   meta: {title: 'Test'},
  //   children: [
  //     {
  //       path: '/test/permission',
  //       name: '模拟后端路由',
  //       component: () => import('_v/Test/permission.vue'),
  //       meta: {title: '模拟后端路由', icon: 'icon-home'}
  //     }
  //   ]
  // },
  { path: '*', redirect: '/404', hidden: true }
]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) { return originalPush.call(this, location, onResolve, onReject) }
  return originalPush.call(this, location).catch((err) => err)
}
const createRouter = () => new VueRouter({
  routes: constantRouterMap
})
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
const router = createRouter()
export default router
