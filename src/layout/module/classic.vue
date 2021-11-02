<template>
  <div class="app-wrap">
    <div class="app-left" :class="{'app-left--collapse': isCollapse}">
      <Logo />
      <div class="app-aside">
        <Aside />
      </div>
    </div>
    <div class="app-right" :class="{'app-right--collapse': isCollapse}">
      <div class="header">
        <Header />
      </div>
      <div class="tags-view-wrap">
        <TagView />
      </div>
      <div class="app-right-main">
        <router-view />
      </div>
    </div>
    <Setting />
  </div>
</template>

<script>
import { Setting, Aside, Logo, Header, TagView } from '../components'
import { mapGetters } from 'vuex'
export default {
  name: 'Classic',
  components: {
    Setting,
    Aside,
    Logo,
    Header,
    TagView
  },
  data () {
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
    .app-left {
      height: 100%;
      width: 240px;
      transition: all 0.2s;
      position: absolute;
      top: 0;
      left: 0;
      .app-aside {
        width: 100%;
        height: calc(100% - 60px);
      }
    }
    .app-left--collapse {
      width: 64px;
    }
    .app-right {
      position: absolute;
      top: 0;
      right: 0;
      width: calc(100% - 240px);
      height: 100%;
      background: #eee;
      .header {
        height: 60px;
        background: #fff;
      }
      .tags-view-wrap {
        height: 50px;
        line-height: 50px;
      }
      .app-right-main {
        height: calc(100% - 110px);
        padding: 20px;
        box-sizing: border-box;
      }
    }
    .app-right--collapse {
      width: calc(100% - 64px);
    }
  }
</style>
