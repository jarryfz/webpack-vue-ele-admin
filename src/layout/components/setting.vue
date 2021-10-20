<template>
  <div>
    <div class="setting_wrap" @click="toggleClick">
      <i class="el-icon-setting"></i>
    </div>
    <el-drawer
      :visible.sync="drawer"
      size="20%"
      :modal="false"
    >
      <template #title>
        <div class="setting_title">項目配置</div>
      </template>
      <div class="setting_content">
        <div class="setting_title">导航栏布局</div>
        <div class="setting_svg_wrap">
          <span class="setting_svg" :class="{'active--icon': layout === 'classic'}" @click="setLayout('classic')">
            <el-tooltip class="item" effect="dark" content="经典布局" placement="bottom-start">
              <svg-icon icon-class="layout-classic" class-name="layout-svg"></svg-icon>
            </el-tooltip>
          </span>
          <span class="setting_svg" :class="{'active--icon': layout === 'leftTop'}" @click="setLayout('leftTop')">
            <el-tooltip class="item" effect="dark" content="左侧顶部布局" placement="bottom-start">
              <svg-icon icon-class="layout-leftTop" class-name="layout-svg"></svg-icon>
            </el-tooltip>
          </span>
          <span class="setting_svg" :class="{'active--icon': layout === 'top'}" @click="setLayout('top')">
            <el-tooltip class="item" effect="dark" content="顶部布局" placement="bottom-start">
              <svg-icon icon-class="layout-top" class-name="layout-svg"></svg-icon>
            </el-tooltip>
          </span>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import SvgIcon from '../../components/SvgIcon.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { SvgIcon },
  name: 'Setting',
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    ...mapGetters(['layout'])
  },
  methods: {
    ...mapActions({
      set: 'layout'
    }),
    toggleClick () {
      this.drawer = true
    },
    setLayout (value) {
      this.set(value)
    }
  },
}
</script>

<style lang="less" scoped>
  .setting_wrap {
    position: fixed;
    top: 45%;
    right: 0;
    cursor: pointer;
    padding: 10px;
    background: #018ffb;
    color: #fff;
    border-radius: 6px 0 0 6px;
  }
  .setting_content {
    padding: 0 20px 20px 20px;
    .setting_svg_wrap {
      text-align: center;
      margin-top: 15px;
      .setting_svg {
        padding: 5px 10px;
        // border: 2px solid #fff;
        font-size: 60px;
      }
    }
    .active--icon {
      border: 2px solid #018ffb;
      border-radius: 6px;
    }
    .layout-svg {
      // width: 80px;
      // height: 80px;
      cursor: pointer;
    }
  }
  .setting_title {
    text-align: center;
    font-weight: bold;
    color: black;
  }
</style>
