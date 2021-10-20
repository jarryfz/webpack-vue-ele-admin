import Layout from '@/layout'

const tableRoute = {
  path: '/table',
  component: Layout,
  redirect: '/table/base-table',
  name: 'Table',
  meta: {
    title: 'Table',
    icon: 'table'
  },
  children: [
    {
      path: 'base-table',
      name: 'BaseTable',
      component: () => import('_v/Table/base-table/index'),
      meta: {
        title: 'Base Table'
      }
    },
    {
      path: 'page-table',
      name: 'PageTable',
      component: () => import('_v/Table/page-table/index'),
      meta: {
        title: 'Page Table'
      }
    }
  ]
}

export default tableRoute
