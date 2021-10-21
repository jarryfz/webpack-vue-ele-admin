import Layout from '@/layout'

const tableRoute = {
  path: '/table',
  component: Layout,
  redirect: '/table/base-table',
  name: 'Table',
  meta: {
    title: '表格',
    icon: 'icon-table'
  },
  children: [
    {
      path: 'base-table',
      name: 'BaseTable',
      component: () => import('_v/Table/base-table/index'),
      meta: {
        title: '基础表格'
      }
    },
    {
      path: 'page-table',
      name: 'PageTable',
      component: () => import('_v/Table/page-table/index'),
      meta: {
        title: '分页'
      }
    }
  ]
}

export default tableRoute
