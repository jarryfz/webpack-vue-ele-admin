<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      
    }
  }
}
</script>

<style lang="less">
  html,body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #fff;
  }
  #app {
    height: 100%;
  }
</style>