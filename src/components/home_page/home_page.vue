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
    <separator></separator>
    <!--每日疯抢-->
    <div class="suprise">
      <div class="upper">
        <div class="left">
          <img src="./suprice.png" >
        </div>
        <div class="center">
          <span>距本场结束</span>
        </div>
        <div class="right">
          <img src="./more.png">
        </div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./slide1.jpg">
            <p class="text1">￥<span>89.00</span></p>
            <p class="text2">省￥46.00</p>
          </div>
          <div class="swiper-slide">
            <img src="./slide2.jpg">
            <p class="text1">￥<span>89.00</span></p>
            <p class="text2">省￥46.00</p>
          </div>
          <div class="swiper-slide">
            <img src="./slide3.jpg">
            <p class="text1">￥<span>89.00</span></p>
            <p class="text2">省￥46.00</p>
          </div>
          <div class="swiper-slide">
            <img src="./slide4.jpg">
            <p class="text1">￥<span>89.00</span></p>
            <p class="text2">省￥46.00</p>
          </div>
          <div class="swiper-slide">
            <img src="./slide5.jpg">
            <p class="text1">￥<span>89.00</span></p>
            <p class="text2">省￥46.00</p>
          </div>
          <div class="swiper-slide">
            <img src="./slide6.jpg">
            <p class="text1">￥<span>89.00</span></p>
            <p class="text2">省￥46.00</p>
          </div>
          <div class="swiper-slide">
            <img src="./slide7.jpg">
            <p class="text1">￥<span>89.00</span></p>
            <p class="text2">省￥46.00</p>
          </div>
          <div class="swiper-slide">
            <img src="./slide8.png">
            <p class="text1">￥<span>89.00</span></p>
            <p class="text2">省￥46.00</p>
          </div>
          <div class="swiper-slide">
            <img src="./slide9.jpg">
            <p class="text1">￥<span>89.00</span></p>
            <p class="text2">省￥46.00</p>
          </div>
          <div class="swiper-slide">
            <img src="./slide10.jpg">
            <p class="text1">￥<span>89.00</span></p>
            <p class="text2">省￥46.00</p>
          </div>
        </div>
      </div>

    </div>
    <separator></separator>
    <!--热门栏目-->
    <div class="hot">
      <div class="upper">
        <img src="./hot1.jpg">
      </div>
      <div class="down">
        <div class="pic1">
          <a href="###">
            <img src="./hot2.png">
          </a>
        </div>
        <div class="pic2">
          <a href="###">
            <img src="./hot3.jpg">
          </a>
        </div>
        <div class="pic3">
          <a href="###">
            <img src="./hot4.jpg">
          </a>
        </div>
      </div>
    </div>
    <separator></separator>
    <!--潮品视频-->
    <div class="video">
      <div class="upper">
        <img class="logo" src="./video.png">
        <a href="###">
          <img src="./more.png">
        </a>
      </div>
      <div class="down">
        <a href="###">
          <img src="./dog.jpg">
          <span class="timer">01:13</span>
          <span class="play"></span>
          <div class="cover">
            <div class="description">
              神奇饮水除口臭<span style="color:#ff0000;">#猫咪保健</span>
            </div>
            <div class="watcher">
              <span class="watcher1"></span>
              <span class="watcher2">18691</span>
            </div>
          </div>
        </a>
      </div>
      <separator></separator>
    </div>
    <!--体验馆-->
    <div class="exp">
      <div class="upper">
          <img class="logo" src="./exp.png">
          <a href="###">
            <img src="./more.png">
          </a>
        </div>
      <div class="banner">
        <mt-swipe :auto="3000">
          <mt-swipe-item>
            <a href="###">
              <img src="./exp1.jpg">
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="###">
              <img src="./exp2.jpg">
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="###">
              <img src="./exp3.jpg">
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <!--品牌特卖-->
    <div class="sales">
      <div class="upper">
        <img class="logo" src="./sales.png">
      </div>
      <div class="text">
        <span class="item1">品牌特卖-医仕高</span>
        <span class="item2">全场6折起</span>
      </div>
      <div class="pic">
        <a href="###"/>
          <img src="./sales1.jpg">
      </div>
      <div class="text">
        <span class="item1">我的日期不完美</span>
        <span class="item2">大牌临期1折起</span>
      </div>
      <div class="pic">
        <a href="###"/>
        <img src="./sales2.jpg">
      </div>
    </div>
    <!--TA公益-->
    <div class="community">
      <div class="upper">
        <img src="./commu.jpg">
        <a href="###">
          <img src="./commu2.png">
        </a>
      </div>
      <div class="pic1">
        <img src="./commu3.jpg">
      </div>
      <div class="cover">
        <p>截止今日，TA公益已联合E宠商城和<span>13</span>家品牌</p>
        <p>累积捐赠639,665.87元</p>
        <p>已合作7家公益组织，举办参与<span>2</span>场公益活动，助养<span>32</span>位领养人</p>
      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import { Swipe, SwipeItem } from 'mint-ui'
  import separator from "../separator/separator.vue"

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);

  export default {
    components: {
      separator,
    },
    mounted () {
      var swiper = new Swiper('.swiper-container', {
        pagination: null,
        slidesPerView: 3.5,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
      })
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  container
    width 100%
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
  /*每日疯抢*/
  .suprise
    width 100%
    height 196px
    padding 10px 0
    box-sizing border-box
    .upper
      width 100%
      height 64px
      vertical-align top
      margin-bottom -10px
      margin
      .left
        width 25%
        height 64px
        float left
        img
          width 100%
          height 24px
      .center
        width 50%
        float left
        span
          font-size 13px
          margin-left 10px
      .right
        width 25%
        height 64px
        float right
        img
          width 70%
          margin-top -12px
          margin-right 5px
          float right
          height 47px
    .swiper-container
      width 100%
      height 132px;
      padding-left 5px
      margin-bottom 10px
      box-sizing border-box
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          margin-right 10px
          padding 0 8px
          box-sizing border-box
          text-align center
        & img
          width 83px
          height 83px
        & .text1
          color red
          font-size 12px
          span
            font-size 16px
        & .text2
          color #999
          font-size 12px
  /*热门栏目*/
  .hot
    width 100%
    height 230px
    .upper
      width 100%
      height 40px
      img
        width 100%
        height 100%
    .down
      width 100%
      height 190px
      .pic1
        width 50%
        height 100%
        float left
        img
          width 100%
          height 100%
      .pic2
        float left
        width 50%
        height 50%
        img
          width 100%
          height 100%
      .pic3
        float left
        width 50%
        height 50%
        img
          width 100%
          height 100%
  /*潮品视频*/
  .video
    width 100%
    .upper
      width 100%
      height 63px
      text-align center
      position relative
      img
        width 188px
        height 53px
        margin-top 5px
      a img
        width 63px
        height 50px
        position absolute
        right 5px
        bottom 5px
    .down
      width 100%
      height 210px
      a
        display block
        position relative
        img
          width 100%
          height 100%
        .timer
          position absolute
          top 5px
          right 5px
          font-size 12px
          color #fff
        .play
          display inline-block
          width 20px
          height 20px
          background url("./play.png") no-repeat
          background-size contain
          position absolute
          top 37%
          left 46%
        .cover
          width 100%
          height 49px
          line-height 29px
          padding 10px 15px
          box-sizing border-box
          background-color #ffffff
          position absolute
          bottom  0px
          .description
            color #333
            font-size 12px
            display inline-block
          .watcher
            float right
            font-size 12px
            color #333
            vertical-align middle
            .watcher1
              display inline-block
              width 10px
              height 9px
              background url("./view-black.png") no-repeat
              background-size contain
  /*体验馆*/
  .exp
    width 100%
    .upper
      width 100%
      height 63px
      text-align center
      position relative
      img
        width 188px
        height 53px
        margin-top 5px
      a img
        width 63px
        height 50px
        position absolute
        right 5px
        bottom 5px

  /*品牌特卖*/
  .sales
    width 100%
    .upper
      width 100%
      height 63px
      text-align center
      border-bottom 1px solid #999
      img
        width 188px
        height 53px
        margin-top 5px
    .text
      width 100%
      height 45px
      padding 10px
      box-sizing border-box
      line-height 25px
      .item1
        font-size 15px
      .item2
        font-size 12px
        color #999
        margin-left 10px
    .pic
      width 100%
      height 155px
      img
        width 100%
        height 155px
  /*TA公益*/
  .community
    width 100%
    position relative
    .upper
      width 100%
      height 45px
      text-align center
      position relative
      img
        width 160px
        height 100%
      a img
        width 75px
        height 11px
        position absolute
        right 5px
        top 17px

    .pic1
      width 100%
      height 140px
      img
        width 100%
        height 100%
    .cover
      position absolute
      bottom 5%
      font-size 14px
      color #fff
      font-weight 700
      text-align center
      p
        margin-top 5px


</style>
