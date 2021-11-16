<template>
  <div v-if="!item.hidden" :style="{ display: !isNest && layout === 'top' ? 'inline-block' : 'block' }">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <router-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)" class="a-link">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <svg-icon v-if="onlyOneChild.meta.icon" :icon-class="onlyOneChild.meta.icon" class-name="aside-bar-svg"></svg-icon>
          <span slot="title">{{ onlyOneChild.meta.title }}</span>
        </el-menu-item>
      </router-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)">
      <template slot="title">
        <svg-icon v-if="item.meta" :icon-class="item.meta.icon" class-name="aside-bar-svg"></svg-icon>
        <span v-if="item.meta">{{ item.meta.title }}</span>
      </template>
      <aside-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :is-nest="true"
        :base-path="resolvePath(child.path)"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate.js'
import { mapGetters } from 'vuex'
export default {
  name: 'AsideItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    basePath: {
      type: String,
      default: ''
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  data () {
    this.onlyOneChild = null
    return {
      // onlyOneChild: {}
    }
  },
  computed: {
    ...mapGetters(['layout'])
  },
  mounted () {},
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      if (showingChildren.length === 1) {
        return true
      }
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }
      return false
    },
    resolvePath (routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style lang="less" scoped>
  .a-link {
    text-decoration: none;
  }
  .aside-bar-svg {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
  /deep/ .el-menu-item.is-active {
    background: #409eff;
    color: #ffffff;
  }
  .el-menu--collapse .el-submenu .el-submenu__title span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
  .el-menu--collapse .el-submenu .el-submenu__title i {
    display: none;
  }
</style>
