<template>
  <article class="container mt-5 px-5">
    <page-title title="Languages"></page-title>
    <div class='languages'>
      <box v-bind:key='language.key' v-for='language in languages' v-bind:item='language'>
        経験年数 : {{language.term}}
      </box>
    </div>
  </article>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import Box from '@/components/box'

export default {
  name: 'Skill',

  components: {
    Box,
    pageTitle
  },

  data () {
    return {
      languages: {
        php: {
          icon: require('../assets/php.svg'),
          content:
            '',
          term: '5年'
        },
        javascript: {
          icon: require('../assets/javascript.svg'),
          content:
            '',
          term: '4年'
        },
        jquery: {
          icon: require('../assets/jquery.svg'),
          content:
            '',
          term: '4年'
        },
        cakephp: {
          icon: require('../assets/cakephp.svg'),
          content:
            '',
          term: '1年半'
        },
        laravel: {
          icon: require('../assets/laravel.svg'),
          content:
            '',
          term: '3ヶ月'
        },
        vue: {
          icon: require('../assets/vue.svg'),
          content:
            '',
          term: '3ヶ月'
        },
        mysql: {
          icon: require('../assets/mysql.svg'),
          content:
            '',
          term: '5年'
        },
        postgresql: {
          icon: require('../assets/postgresql.svg'),
          content:
            '',
          term: '半年'
        },
        redis: {
          icon: require('../assets/redis.svg'),
          content:
            '',
          term: '1年'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
