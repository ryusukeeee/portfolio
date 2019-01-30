<template>
  <section class='box'>
    <p>
      <a :href="item.url">{{item.title}}</a>
    </p>
    <br/>
    <nav class="level is-mobile">
      <div class="level-left">
        <div class="level-item">
          <div class="tags has-addons">
            <span class="tag is-success"><i class="fas fa-thumbs-up"></i></span>
            <span class="tag">{{item.likes_count}}</span>
          </div>
        </div>
        <div class="level-item" v-for="tag in item.tags" :key="tag.name">
          <span class="tag is-grey is-rounded">{{tag.name}}</span>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'post',
  props: ['item']
}
</script>

<style scoped>
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
</style>
