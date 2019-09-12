<template>
	<div class="h100p pd-t62 main">
    <div class="w100p h100p">
      Main
      <div class="fl w220 h100p left-menu">
        <div class="h100p menu-box"></div>
      </div>
      
      <div class="h100p mg-l240 right-box">
        <div class="w100p h100p right-box-wrap">
          <!--<router-view></router-view>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "main"
	}
</script>

<style>
  .menu-box { background: #ff1250; }
  .right-box-wrap { background: #42b983; }
</style>


