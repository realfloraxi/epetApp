<template>
  <div class="swiper-container">
    <ul class="swiper-wrapper">
      <li class="swiper-slide">
        <router-link to="/home_page">首页</router-link>
      </li>
      <li class="swiper-slide">
        <router-link to="/cat_food">猫粮</router-link>
      </li>
      <li class="swiper-slide">
        <router-link to="/sales">特卖</router-link>
      </li>
      <li class="swiper-slide">
        <router-link to="/supermarket">罐头超市</router-link>
      </li>
      <li class="swiper-slide">
        <router-link to="/video">潮品视频</router-link>
      </li>
      <li class="swiper-slide">
        <router-link to="/classroom">新喵课堂</router-link>
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
        created(){
          var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 5,
            /*spaceBetween:0,*/
            paginationClickable: true,
            freeMode: false,
            freeModeMomentumBounceRatio: 0
          });
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    width 375px
    height 36px
    .swiper-wrapper
      height 36px
      width 450px
      .swiper-slide
        display inline-block
        height 36px
        line-height 36px
        width 75px
        font-size 14px
        color #666
        text-align center
</style>
