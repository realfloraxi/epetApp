<template>
  <div class="container">
    <!--轮播图-->
    <div class="banner">
      <mt-swipe :auto="3000">
        <mt-swipe-item>
          <a href="###">
            <img src="./banner01.jpg">
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="###">
            <img src="./banner02.jpg">
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="###">
            <img src="./banner03.jpg">
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="###">
            <img src="./banner04.jpg">
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="###">
            <img src="./banner05.png">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--新人专享-->
    <div class="new">
      <a href="">
        <img src="./new.gif">
      </a>
    </div>
    <!--小菜单-->
    <div class="menu_container">
      <ul class="menu_list">
        <li class="menu">
          <a href="###">
            <img src="./menu1.png">
          </a>
        <li class="menu">
          <a href="###">
            <img src="./menu2.png">
          </a>
        <li class="menu">
          <a href="###">
            <img src="./menu3.png">
          </a>
        <li class="menu">
          <a href="###">
            <img src="./menu4.png">
          </a>
        <li class="menu">
          <a href="###">
            <img src="./meu5.png">
          </a>
        </li>
      </ul>
    </div>
    <!--分割线-->
    <div class="line"></div>
    <!--每日疯抢-->
    <div class="suprise">
      <div class="upper">
        <img src="./suprice.png" >
        <span>距离下一场</span>
        <img src="./more.png">
      </div>
      <div div="down"></div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Swipe, SwipeItem } from 'mint-ui';

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);

  export default {
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*轮播图*/
  .banner
    width 100%
    height 160px
    img
      width 100%
      height 160px
    .mint-swipe-indicator
      width 8px
      height 8px
      background-color #fff
      opacity .9
      &.is-active
        width 17px
        height 8px
        background-color #fff
        opacity .9
        border-radius 30px
  /*新人专享*/
  .new
    width 100%
    height 120px
    img
      width 100%
      height 120px
  /*小菜单*/
  .menu_container
    width 100%
    height 90px
    .menu_list
      display flex
      .menu
        flex 1
        width 100%
        height 90px
        img
          width 100%
          height 90px
  /*分割线*/
  .line
    width 100%
    height 10px
    background-color #f3f4f5
  /*每日疯抢*/
  .surprise
    width 100%
    .upper
      width 100%
      height 64px
      img
        height 24px
        margin-top 10px

</style>
