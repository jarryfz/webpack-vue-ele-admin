<template>
  <div class="app-wrap">
    <div class="app-header">
      <Header />
    </div>
    <div class="app-nav-header">
      <NavHeader />
    </div>
    <div class="app-tags">
      <TagView />
    </div>
    <div class="app-main-view">
      <router-view></router-view>
    </div>
    <Setting />
  </div>
</template>

<script>
import { Setting, Header, NavHeader, TagView } from '../components'
export default {
  name: 'Top',
  components: {
    Header,
    Setting,
    NavHeader,
    TagView
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
  .app-wrap {
    height: 100%;
    .app-header {
      height: 62px;
    }
    .app-nav-header {
      height: 40px;
      box-sizing: border-box;
      border-bottom: 2px solid #eee;
      overflow: hidden;
    }
    .app-tags {
      height: 40px;
    }
    .app-main-view {
      height: calc(100% - 140px);
      padding: 20px;
      box-sizing: border-box;
      background: #eee;
    }
  }
</style>