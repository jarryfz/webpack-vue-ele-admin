<template>
  <div class="app-wrap">
    <div class="app-header">
      <Header />
    </div>
    <div class="app-content">
      <div class="app-aside" :class="{'app-aside--collapse': isCollapse}">
        <Aside />
      </div>
      <div class="app-main" :class="{'app-main--collapse': isCollapse}">
        <div class="app-main-header">
          <nav-header />
        </div>
        <div class="app-main-view">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <Setting />
  </div>
</template>

<script>
import { Header, NavHeader, Aside, Setting } from '../components'
import { mapGetters } from 'vuex'
export default {
  name: 'Layout',
  components: {
    Header,
    NavHeader,
    Aside,
    Setting
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['isCollapse'])
  }
}
</script>

<style lang="less" scoped>
  .app-wrap {
    height: 100%;
    .app-header {
      width: 100%;
      height: 80px;
    }
    .app-content {
      width: 100%;
      position: relative;
      height: calc(100% - 80px);
      .app-aside {
        height: 100%;
        position: absolute;
        width: 240px;
        transition: all 0.2s;
      }
      .app-aside--collapse {
        width: 64px;
      }
      .app-main {
        background-color: #eee;
        height: 100%;
        width: calc(100% - 240px);
        position: absolute;
        left: 240px;
        transition: all 0.2s;
        &-header {
          height: 80px;
        }
        &-view {
          height: calc(100% - 80px);
          box-sizing: border-box;
          padding: 20px;
        }
      }
      .app-main--collapse {
        width: calc(100% - 64px);
        left: 64px
      }
    }
  }
</style>