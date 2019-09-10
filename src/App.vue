<template>
  <div id="app">
    <router-view/> <!-- 路由根节点 -->
  </div>
</template>

<script>

  //引入头部左侧导航公共组件
  //import Header from './components/Header/Header.vue'
  //import  NavLeft from './components/NavLeft/tree-menu-item.vue'

  export default {
    name: 'App',
    components: {
      //Header,
      //NavLeft
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
