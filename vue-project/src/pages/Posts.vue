<template>
  <article class="container mt-5 px-5">
    <page-title title="Qiita Posts"></page-title>
    <div class='tools'>
      <post v-bind:key='tool.name' v-for='tool in posts_qiita' v-bind:item='tool'></post>
    </div>
  </article>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import axios from 'axios'
import Post from '../components/post'

export default {
  name: 'Posts',

  components: {
    Post,
    pageTitle
  },

  data () {
    return {
      posts_qiita: []
    }
  },

  async created () {
    try {
      let res = await axios.get('https://qiita.com/api/v2/users/ryusukeeee/items')
      this.posts_qiita = res.data
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped>

</style>
