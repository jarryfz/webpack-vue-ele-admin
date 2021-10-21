<template>
  <router-link to="/" class="app-log">
    <img :src="require('@/assets/img/logo.png')">
    <div class="title">vue-admin</div>
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
}
</script>
<style lang="less" scoped>
  .app-log {
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: #000;
    font-size: 16px;
    padding: 0 5px;
    img {
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }
    .title {
      font-size: 14px;
      font-weight: 700;
      transition: 0.5s;
      margin-left: 12px;
    }
  }
</style>
