<template>
  <section class='box'>
    <p>
      <img :src=item.icon />
    </p>
    <br/>
    <span class="box-content">{{item.content}}</span>
    <span class="sub-content"><slot></slot></span>
  </section>
</template>

<script>
export default {
  name: 'box',
  props: ['item']
}
</script>

<style lang="scss" scoped>
  .box {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    width: 300px;
    height: 300px;
    display: inline-block;
    vertical-align: top;
    margin: 20px;
    border-radius: 30px;
    position: relative;
  }
  @media (max-width: 1000px) {
    .box {
      width: 260px;
      height:320px;
    }
  }
  p,
  nav {
    font-weight: normal;
    padding : 10px 30px;
    margin : 10px 0;
    display: inline-block;
  }
  .box-content {
    text-align: left;
    margin: 0 20px;
    word-break:break-all;
    color : rgb(40, 40, 40);
  }
  .sub-content {
    font-weight: normal;
    position: absolute;
    bottom: 0px;
    right: 0px;
    left: 0px;
    text-align: center;
    margin: 20px;
    color : rgb(40, 40, 40);
    word-break:break-all;
  }
</style>
