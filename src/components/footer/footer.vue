<template>
    <ul class="footer-container">
      <li class="footer-item">
        <router-link to="/home_page">
          <img src="./main_cattab_1_sel.png" alt="首页">
        </router-link>
      </li>
      <li class="footer-item">
        <router-link to="/classw">
          <img src="./main_tab_2.png" alt="分类">
        </router-link>
      </li>
      <li class="footer-item">
        <router-link to="/cart">
          <img src="./main_tab_3.png" alt="购物车">
        </router-link>
      </li>
      <li class="footer-item">
        <router-link to="/myepet">
          <img src="./main_tab_4.png" alt="我的E宠">
        </router-link>
      </li>
    </ul>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer-container
    position fixed
    bottom 0
    display flex
    width 100%
    height 54px
    border-top 1px solid #e7e7e7
    text-align center
    background-color white
    z-index 100
    .footer-item
      width 0
      flex 1
      height 100%
      & img
        width 50%
        height 44px
</style>
