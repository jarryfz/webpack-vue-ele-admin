<template>
  <div class="home-box">
    <el-row :gutter="20" class="m-b-20">
      <el-col
        v-for="item in headerList"
        :key="item.svgClass"
        :span="6"
      >
        <el-card shadow="always">
          <div class="card-box">
            <svg-icon
              :icon-class="item.svgClass"
              class-name="card-svg"
            />
            <div class="card-text">
              <div>{{ item.text }}</div>
              <span>{{ item.num }}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="12" class="m-b-20">
      <el-col :span="10">
        <el-card shadow="always">
          <div class="echarts-box">
            <Echart
              width="100%"
              height="500px"
              :options="options"
            />
          </div>
        </el-card>
      </el-col>
      <el-col :span="14">
        <el-card shadow="always">
          <div class="echarts-box">
            <Echart
              width="100%"
              height="500px"
              :options="histogramOptions"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-card shadow="always">
          <div class="echarts-box">
            <Echart
              width="100%"
              height="500px"
              :options="doubleColumnOptions"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Echart from '_c/Echarts/index.vue'
import MixinsOptions from './index.js'
export default {
  name: 'Home',
  components: {
    Echart
  },
  mixins: [MixinsOptions],
  data () {
    return {
      headerList: [
        {
          svgClass: 'upcoming',
          text: '待办',
          num: 1520
        },
        {
          svgClass: 'haveAlreadyHanded',
          text: '已办',
          num: 1520
        },
        {
          svgClass: 'overtime',
          text: '超期',
          num: 1520
        },
        {
          svgClass: 'back',
          text: '退件',
          num: 1520
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.card-box {
  display: flex;
  align-items: center;
  width: 100%;
  .card-svg {
    width: 80px;
    height: 80px;
  }
  .card-text {
    flex: 1;
    text-align: right;
    div {
      font-size: 16px;
      line-height: 18px;
      margin-bottom: 12px;
      color: #878d99;
    }
    span {
      font-size: 20px;
      font-weight: 700;
      color: #666;
    }
  }
}
/deep/.el-col {
  border-radius: 4px;
}
</style>
