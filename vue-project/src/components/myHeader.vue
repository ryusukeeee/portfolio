<template>
  <header class="bg-dark">
    <div class = 'link'>
      <router-link to='/'>Home</router-link>
      <router-link to='/skill'>Skill</router-link>
      <router-link to='/works'>Works</router-link>
      <router-link to='/posts'>Posts</router-link>
      <div class='clear'></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header {
    width: 100%;
    text-align: center;
    position: relative;
    top: 0px;
    z-index: 10;
  }
  a {
    height: 7vh;
    line-height: 7vh;
    transition: all 0.3s;
    cursor: pointer;
    font-size: 18px;
    color: lightgrey;
    text-decoration: none;
    width: 150px;
    display: inline-block;
  &:hover {
    background-color: rgba(65,184,131,0.5);
    transition: 0.5s;
   }
  }
  .clear {
    clear: left;
  }
</style>
