<template>
  <div class="">
    <Search :search-data="searchData" />
  </div>
</template>

<script>
import Search from './search.vue'
export default {
  name: 'TablePane',
  components: {
    Search
  },
  props: {
    searchData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  
</style>
