<template>
  <div class="tags-view-container">
    <el-scrollbar>
      <router-link
        v-for="(item, index) in tagsList"
        ref="tag"
        :key="index"
        :to="item.path"
        class="tags-view-item"
        :class="isActive(item) ? 'active' : ''"
      >
        {{ item.name }}
        <span class="el-icon-close" @click.prevent.stop="closeTags(item)" />
      </router-link>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'TagsView',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['tagsList'])
  },
  watch: {
    $route () {
      this.addTagsView()
      this.moveToCurrentTag()
    }
  },
  mounted () {
    this.addTagsView()
  },
  methods: {
    ...mapActions(['addVisitedViews', 'delVisitedViews']),
    generateRoute () {
      if(this.$route.name) {
        return this.$route
      }
      return false
    },
    isActive (route) {
      return route.path === this.$route.path
    },
    addTagsView () {
      const route = this.generateRoute()
      if(!route) {
        return false
      }
      this.addVisitedViews(route)
    },
    closeTags (route) {
      this.delVisitedViews(route).then((res) => {
        if(this.isActive(route)) {
          const latestView = res.slice(-1)[0]
          if(latestView) {
            this.$router.push(latestView)
          } else {
            this.$router.push('/')
          }
        }
      })
    },
    moveToCurrentTag () {

    }
  }
}
</script>
<style lang="less" scoped>
  .tags-view-container {
    height: 100%;
    padding: 0 20px;
    box-shadow: 0px 2px 8px 0px rgb(135 118 114 / 15%);
    .tags-view-item {
      display: inline-block;
      position: relative;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      text-decoration: none;
      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
          content: '';
          background-color: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
      .el-icon-close {
        width: 16px;
        height: 16px;
        vertical-align: 2px;
        border-radius: 50%;
        text-align: center;
        transition: all .3s cubic-bezier(.645, .045, .355, 1);
        transform-origin: 100% 50%;
        &::before {
          transform: scale(.6);
          display: inline-block;
          vertical-align: -3px;
        }
        &:hover {
          background-color: #b4bccc;
          color: #fff;
        }
      }
    }
    /deep/ .el-scrollbar {
      height: 100%;
      .el-scrollbar__wrap {
        overflow-x: hidden;
        overflow-y: hidden;
        margin-right: 0 !important;
        .el-scrollbar__view {
          white-space: nowrap;
        }
        .el-menu {
          width: 100%;
          border: none;
        }
      }
    }
  }
</style>
