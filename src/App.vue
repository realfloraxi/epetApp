<template>
  <div>
    <epet-header></epet-header>

    <div class="tab">
      <div class="tab-item">
        <router-link to="/home_page">首页</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/cat_food">猫粮</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sales">特卖</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/supermarket">罐头超市</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/video">潮品视频</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/classroom">新喵课堂</router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'

  export default {
    components: {
      'epet-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display flex
    height 35px
    line-height 35px
    background-color burlywood
    .tab_item
      font-size 14px
      width 0
      flex 1


</style>
