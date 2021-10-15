<template>
  <div class="app-header-box">
    <div class="app-header-box-title">
      <h1>webpack-vue-admin</h1>
    </div>
    <div class="app-header-box-user">
      <el-tooltip
        class="item"
        effect="dark"
        content="全屏显示"
        placement="bottom"
      >
        <svg-icon icon-class="full-screen" class-name="full-screen"></svg-icon>
      </el-tooltip>
      <el-dropdown placement="bottom">
        <span class="el-dropdown-link">
          <svg-icon icon-class="admin-avatar" class-name="admin-avatar"></svg-icon>
          <span>管理员</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      fullscreen: require('@/assets/img/fullscreen.png'),
      header: require('@/assets/img/header.png')
    }
  },
  mounted () {
    
  },
  methods: {
    
  },
}
</script>
<style lang="less" scoped>
  .app-header-box {
    background: #455eee;
    color: #fff;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 0 20px;
    height: 100%;
    &-title {
      flex: 1;
    }
    &-user {
      width: 200px;
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
    color: #fff;
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
