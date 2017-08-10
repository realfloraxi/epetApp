<template>
  <div class="header">
    <div class="header_up">
      <div class="header_pic">
        <a href="###">
          <img src="./header.png">
        </a>
      </div>
      <span class="header_btn">
          <img src="./closebtn_03.png">
      </span>
    </div>
    <div class="header_down">
      <div class="search">
        <div class="search_item search_left">
          <span>猫站|</span><!--
          --><a href="###">
          <span>重庆</span>
          <div class="triangle"></div>
          </a>
        </div>
        <div class="search_item search_center">
          <a href="###">
            <input type="search" placeholder="搜索商品和品牌">
            <span class="icon_search"></span>
          </a>
        </div>
        <div class="search_item search_right">
          <a href="###">
            <img src="./mydope.png">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*头部样式*/
  .header
    width 100%
    height 108px
    /*background-color #7e8c8d*/
    font-size 14px
    color #333
    /*position fixed
    z-index 99*/

    /*头部上部分*/
    .header_up
      height 55px
      /*background-color aqua*/
      position relative
      .header_btn
        width 19px
        height 19px
        position absolute
        top 15px
        left 9px
        img
          width 100%
          height 100%
      .header_pic a
        display block
      .header_pic img
        width 100%
        height 100%
        vertical-align bottom

    /*头部下部分*/
    .header_down
      height 53px
      .search
        width 355px
        height 43px
        line-height 43px
        margin 5px 10px
        position relative
        .search_item
          display inline-block
        .search_left
          width 80px
          .triangle
            width 0
            height 0
            border-bottom 4px solid #666
            border-right 4px solid transparent
            border-left 4px solid transparent
            float right
            margin-top 19px
            margin-right 8px
        .search_center
          position relative
          a input
            width 240px
            height 25px
            background-color #f6f6f6
            color #9e9e9e
            text-indent 10px
            border-radius 5px
            outline none
          a .icon_search
            display inline-block
            width 11px
            height 11px
            background url("./search.png") no-repeat
            background-size 11px auto
            position absolute
            right 5px
            top 17px
        .search_right
          width 35px
          height 27px
          position absolute
          right 0
          a
            display inline-block
            width 100%
            height 100%
            img
              width 25px
              height 25px
              margin-left 10px
              vertical-align middle

</style>


