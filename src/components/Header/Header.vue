<template>
  <div id="main">
    <div class="HeaderWrap">
      <!--logo-->
      <div class="HeaderLeft">
        <img src="./images/logo.png">
      </div>
      <!--头部右侧-->
      <div class="HeaderRight">
        <div class="HeaderItem">
          <div class="ProfileName">欢迎你，xxx</div>
          <div></div>
        </div>
        <div class="HeaderItem">
          <i class="iconfont icon-exchange"></i>
          <p>切换用户</p>
        </div>
        <div class="HeaderItem">
          <i class="iconfont icon-key"></i>
          <p>修改密码</p>
        </div>
        <div class="HeaderItem">
          <i class="iconfont iconNotification"></i>
          <p>消息</p>
        </div>
        <div class="HeaderItem">
          <i class="iconfont icon-switch-off"></i>
          <p>退出</p>
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

<style lang="stylus" rel="stylesheet/stylus" scoped>
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




</style>
