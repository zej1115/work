<template>
  <div class="HeaderWrap">
    <div class="w100p h8p pos-fix pos-c-t z-100 HeaderMain">
      <!--logoBegin-->
        <h1>
          <img src="">
        </h1>
      <!--logoEnd-->

      <!--头部右侧-->
      <div class="fr w35p h100p pos-abs r0 t0 bg-color-pink HeaderRightWrap">
        <div class="fl HeaderItem">
          <div class="ProfileName">欢迎你，xxx</div>
          <div></div>
        </div>
        <div class="fl">
          <span class="iconfont icon-exchange"></span>
          <span>切换用户</span>
        </div>
        <div class="fl">
          <span class="iconfont icon-key"></span>
          <span>修改密码</span>
        </div>
        <div class="fl">
          <span class="iconfont iconNotification"></span>
          <span>消息</span>
        </div>
        <div class="fl">
          <span class="iconfont icon-switch-off"></span>
          <span>退出</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header.vue"
    }
</script>

<style>
  .HeaderMain { background: #0096ff;}
</style>

<!--<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .HeaderWrap
    position fixed
    left 0
    top 0
    width 100%
    height 64px
    background #eee
    .HeaderLeft
      position absolute
      left 39px
      top 13px
      width 200px
      height 37px
    .HeaderRight
      position absolute
      left 1000px
      top 1px
      display flex
      .HeaderItem
        width 120px
        height 100%
        line-height 62px
        font-size 16px
        color #778194
        display flex
        .ProfileName
          font-weight bold
        .iconfont
          color #888888




</style>-->
