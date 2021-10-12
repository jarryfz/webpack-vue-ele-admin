<template>
  <div>
    <el-button type="success" @click="addFun">加</el-button>
    <el-button type="danger" @click="reductionFun">减</el-button>
    <div>{{doStatus}}</div>
    <div>{{count}}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {}
  },
  computed: {
    // ...mapGetters需要安装@babel/runtime-corejs3
    ...mapGetters(["doStatus"]),
    ...mapState({
      count: state => state.app.status
    })
  },
  created() {
    
  },
  methods: {
    ...mapActions({
      add: 'addFun',
      reduction: 'reductionFun'
    }),
    addFun() {
     this.add(2)
    },
    reductionFun() {
      this.reduction(1)
    }
  }
}
</script>

<style lang="less" scoped>
  
</style>
