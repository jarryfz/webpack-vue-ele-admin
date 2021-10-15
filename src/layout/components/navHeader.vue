<template>
  <div class="app-main-nav">
    <div class="nav-breadcrumb">
      <div class="hamburger">
        <svg-icon :icon-class="iconClass" class-name="hamburger-img" @svgClick="changeCollapse"></svg-icon>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="nav-tag-list">2</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'NavHeaser',
  data() {
    return {
      hamburger: require('@/assets/img/hamburger.png')
    }
  },
  computed: {
    ...mapGetters(['isCollapse']),
    iconClass () {
      return this.isCollapse ? 'open' : 'fold'
    }
  },
  mounted () {
    console.log(this.$router)
  },
  methods: {
    ...mapActions({
      collapse: 'isCollapseFun'
    }),
    changeCollapse () {
      console.log(1)
      this.collapse()
    }
  }
}
</script>

<style lang="less" scoped>
  .app-main-nav {
    .nav-breadcrumb {
      height: 40px;
      display: flex;
      align-items: center;
      padding: 0 15px;
      border-bottom: 1px solid #ccc;
      .hamburger {
        margin-right: 10px;
      }
      .hamburger-img {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
    .nav-tag-list {
      height: 40px;
      padding: 0 15px;
      box-shadow: 0px 2px 8px 0px rgb(135 118 114 / 15%);
    }
  }
</style>