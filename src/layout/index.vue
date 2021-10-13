<template>
  <div class="app-wrap">
    <div class="app-header">
      <Header />
    </div>
    <div class="app-content">
      <div class="app-aside">aside</div>
      <div class="app-main">
        <div class="app-main-header">main-header</div>
        <div class="app-main-view">
          <router-view></router-view>
        </div>
        <div class="app-footer">footer</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Header } from './components'
export default {
  name: 'Layout',
  components: {
    Header
  },
  data() {
    return {
      
    }
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
        background-color: #293a4c;
        color: #fff;
        height: 100%;
        position: fixed;
        width: 240px;
        overflow: hidden;
      }
      .app-main {
        background-color: #eee;
        height: 100%;
        position: relative;
        margin-left: 240px;
        &-header {
          height: 80px;
        }
        &-view {
          height: calc(100% - 120px);
          box-sizing: border-box;
          padding: 20px;
        }
        .app-footer {
          height: 40px;
        }
      }
    }
  }
</style>