<template>
  <div>
    <epet-header></epet-header>

    <ul class="tab">
      <li class="tab-item">
        <router-link to="/home_page">首页</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/cat_food">猫粮</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/sales">特卖</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/supermarket">罐头超市</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/video">潮品视频</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/classroom">新喵课堂</router-link>
      </li>
    </ul>

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
    height 36px
    white-space nowrap
    overflow hidden
    .tab-item
      height 36px
      float left
      width 16%
      font-size 14px
      color #666
      text-align center
</style>
