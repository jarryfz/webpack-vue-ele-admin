<template>
  <div class="app-header-box">
    <div class="app-header-box-title">
      <h2 v-if="layout !== 'classic'">webpack-vue-admin</h2>
      <nav-header v-if="layout === 'classic'" />
    </div>
    <div class="app-header-box-nav">
      <Aside v-if="layout === 'top'" />
    </div>
    <div class="app-header-box-user">
      <el-tooltip
        class="item"
        effect="dark"
        :content="isFullscreen ? '退出全屏' : '全屏显示'"
        placement="bottom"
      >
        <svg-icon :icon-class="isFullscreen ? 'out-full-screen' : 'full-screen'" class-name="full-screen" @svgClick="changeFullScreen"></svg-icon>
      </el-tooltip>
      <el-dropdown placement="bottom">
        <span class="el-dropdown-link">
          <svg-icon icon-class="admin-avatar" class-name="admin-avatar"></svg-icon>
          <span>管理员</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item>
            <span @click="logout">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'
import navHeader from './navHeader.vue'
import Aside from './aside.vue'
import { mapGetters } from 'vuex'
import wsCache from '@/cache'
import { resetRouter } from '@/router'
export default {
  name: 'Header',
  components: {
    navHeader,
    Aside
  },
  data () {
    return {
      isFullscreen: false,
      fullscreen: require('@/assets/img/fullscreen.png'),
      header: require('@/assets/img/header.png')
    }
  },
  computed: {
    ...mapGetters(['layout'])
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
  },
  methods: {
    init () {
      if (screenfull.isEnabled) {
        screenfull.on('change', () => {
          this.isFullscreen = screenfull.isFullscreen
        })
      }
    },
    changeFullScreen () {
      if (!screenfull.isEnabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      // screenfull在IE下引起的坑（排版错乱）
      // 解决方案：添加判断IE的逻辑，并把全屏的元素设置为body
      if(!!window.ActiveXObject || 'ActiveXObject' in window) {
        screenfull.toggle(document.getElementsByTagName('body')[0])
      } else {
        screenfull.toggle()
      }
      this.isFullscreen = !this.isFullscreen
    },
    logout () {
      wsCache.delete('token')
      resetRouter()
      this.$router.replace('/login')
    }
  }
}
</script>
<style lang="less" scoped>
  .app-header-box {
    // background: #455eee;
    // color: #fff;
    box-sizing: border-box;
    position: relative;
    align-items: center;
    padding: 0 20px;
    height: 100%;
    border-bottom: 2px solid #eee;
    &-title {
      width: 300px;
      position: absolute;
      height: 100%;
      left: 0;
    }
    &-nav {
      position: absolute;
      height: 60px;
      width: calc(100% - 520px);
      left: 300px;
    }
    &-user {
      position: absolute;
      right: 0;
      width: 200px;
      height: 100%;
      display: flex;
      align-items: center;
      .full-screen {
        width: 20px;
        height: 20px;
        cursor: pointer;
        margin-right: 25px;
      }
    }
  }
  /deep/ .el-dropdown {
    color: #000;
  }
  /deep/ .el-dropdown-link {
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    .admin-avatar {
      width: 30px;
      height: 30px;
      margin-right: 8px;
    }
  }
</style>
