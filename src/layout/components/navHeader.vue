<template>
  <div class="app-main-nav">
    <div class="nav-breadcrumb" :class="{'nav-border': layout==='leftTop'}">
      <div class="hamburger" v-if="layout!=='top'">
        <svg-icon :icon-class="iconClass" class-name="hamburger-img" @svgClick="changeCollapse"></svg-icon>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="layout === 'leftTop'" class="nav-tag-list">
      <tagsView />
    </div>
  </div>
</template>

<script>
import tagsView from './tagsView.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'NavHeaser',
  components: {
    tagsView
  },
  data() {
    return {
      hamburger: require('@/assets/img/hamburger.png')
    }
  },
  computed: {
    ...mapGetters(['isCollapse', 'layout']),
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
    .nav-border {
      border-bottom: 1px solid #ccc;
    }
    .nav-breadcrumb {
      height: 40px;
      display: flex;
      align-items: center;
      padding: 0 15px;
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
    }
  }
</style>