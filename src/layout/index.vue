<template>
  <div class="app-wrap">
    <component :is="layout"></component>
  </div>
</template>

<script>
import classic from './module/classic.vue'
import top from './module/top.vue'
import leftTop from './module/leftTop.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Layout',
  components: {
    classic,
    top,
    leftTop
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['layout'])
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