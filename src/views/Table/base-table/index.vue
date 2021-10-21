<template>
  <div>
    <table-pane :search-data="searchData" />
  </div>
</template>

<script>
import TablePane from '_c/Table/tablePane.vue'
export default {
  name: 'BaseTable',
  components: {
    TablePane
  },
  data() {
    return {
      searchData: {
        elInput: [
          {
            key: 'name',
            name: '名称',
            width: 150
          }
        ]
      }
    }
  },
}
</script>
<style lang="less" scoped>
  
</style>