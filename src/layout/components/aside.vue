<template>
  <div :class="{'top-menu': layout === 'top', 'scrollbar-container': layout !== 'top'}">
    <el-scrollbar>
      <el-menu
        :default-active="activeMenu"
        :unique-opened="false"
        :collapse-transition="false"
        :collapse="isCollapse"
        :active-text-color="layout === 'top' ? '#409eff' : '#ffffff'"
        :mode="layout !== 'top' ? 'vertical' : 'horizontal'"
      >
        <aside-item
          v-for="route in routes"
          :key="route.path"
          :base-path="route.path"
          :item="route"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import AsideItem from './asideItem.vue'
import { mapGetters } from 'vuex'
// import { constantRouterMap } from '@/router'
export default {
  name: 'Aside',
  components: {
    AsideItem
  },
  data () {
    return {
      // routers: constantRouterMap,
      basepath: null
    }
  },
  computed: {
    ...mapGetters(['isCollapse', 'layout', 'routes']),
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      if(meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },
  mounted () {},
  methods: {}
}
</script>
<style lang="less" scoped>
.scrollbar-container {
  height: 100%;
  /deep/ .el-scrollbar {
    width: 100%;
    height: 100%;
    .el-scrollbar__wrap {
      overflow: scroll;
      overflow-x: hidden;
    }
  }
}
.top-menu {
  width: 100%;
  height: 100%;
  .el-menu-demo {
    height: 100%;
  }
  /deep/ .el-submenu__icon-arrow {
    right: 0;
    margin-top: -5px;
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
  /deep/ .el-menu--horizontal>.el-menu-item, .el-menu--horizontal>.el-submenu {
    display: inline-block;
    float: none;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
}
</style>