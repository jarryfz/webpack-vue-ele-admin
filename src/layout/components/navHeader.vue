<template>
  <div class="app-main-nav">
    <div class="nav-breadcrumb" :class="{'nav-border': layout==='leftTop'}">
      <div class="hamburger" v-if="layout!=='top'">
        <svg-icon :icon-class="iconClass" class-name="hamburger-img" @svgClick="changeCollapse"></svg-icon>
      </div>
      <el-breadcrumb>
        <el-breadcrumb-item
          v-for="item in breadcrumbList"
          :key="item.name"
          :to="{ path: item.path }"
        >
          {{ item.meta.title }}
        </el-breadcrumb-item>
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
      breadcrumbList: [],
      hamburger: require('@/assets/img/hamburger.png')
    }
  },
  computed: {
    ...mapGetters(['isCollapse', 'layout']),
    iconClass () {
      return this.isCollapse ? 'open' : 'fold'
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  mounted () {
    this.getBreadcrumb()
  },
  methods: {
    ...mapActions({
      collapse: 'isCollapseFun'
    }),
    changeCollapse () {
      this.collapse()
    },
    getBreadcrumb () {
      let matched = this.$route.matched
      if(matched[0].name !== 'Home') {
        matched = [{ path: '/', meta: { title: '首页'} }].concat(matched)
      }
      this.breadcrumbList = matched
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