<template>
    <div class="w100p h100p pos-fix pos-c z-1 app-wrap">
      <Header></Header>
      <Main></Main>
    </div>
</template>

<script>
  import Header from './common/Header'
  import Main from './common/main'
  export default {
    name: "index",

    components: {
      Header,
      Main
    }
  }
</script>
