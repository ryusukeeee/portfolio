<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader'

export default {
  name: 'App',
  components: {
    myHeader
  }
}
</script>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
