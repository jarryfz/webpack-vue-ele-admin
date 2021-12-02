export default {
  isCollapse: state => state.app.isCollapse,
  layout: state => state.app.layout,
  tagsList: state => state.tagsView.tagsList,
  routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes,
  isAddRouters: state => state.permission.isAddRouters
}
