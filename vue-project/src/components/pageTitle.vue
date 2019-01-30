<template>
  <h1>{{title}}</h1>
</template>

<script>
export default {
  name: 'pageTitle',
  props: ['title']
}
</script>

<style scoped>
  h1 {
    font-weight: normal;
    font-size: 2.5rem;
  }
</style>
