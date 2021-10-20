<template>
  <div class="nav-menu">
    <el-scrollbar>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        <el-menu-item index="3">消息中心1</el-menu-item>
        <el-menu-item index="3">消息中心2</el-menu-item>
        <el-menu-item index="3">消息中心3</el-menu-item>
        <el-menu-item index="3">消息中心4</el-menu-item>
        <el-menu-item index="3">消息中心5</el-menu-item>
        <el-menu-item index="3">消息中心6</el-menu-item>
        <el-menu-item index="3">消息中心7</el-menu-item>
        <el-menu-item index="3">消息中心8</el-menu-item>
        <el-menu-item index="3">消息中心9</el-menu-item>
        <el-menu-item index="3">消息中心6</el-menu-item>
        <el-menu-item index="3">消息中心7</el-menu-item>
        <el-menu-item index="3">消息中心8</el-menu-item>
        <el-menu-item index="3">消息中心9</el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
}
</script>

<style lang="less" scoped>
  .nav-menu {
    width: 100%;
    height: 100%;
    .el-menu-demo {
      height: 100%;
    }
    /deep/ .el-scrollbar {
      height: 100%;
      // width: 100%;
      // height: calc(100% + 20px);
      .el-scrollbar__wrap {
        overflow-x: hidden;
        overflow-y: hidden;
        .el-scrollbar__view {
          white-space: nowrap;
        }
        .el-menu {
          width: 100%;
          border: none;
        }
      }
    }
    /deep/ .el-menu--horizontal>.el-menu-item {
      display: inline-block;
      float: none;
    }
  }
</style>