<template>
  <article class="container mt-5 px-5">
    <page-title title="Home"></page-title>
    <div class="home">
      <table>
        <tbody>
          <tr>
            <th>Name.</th>
            <td>Ryusukeeee</td>
          </tr>
          <tr>
            <th>Age.</th>
            <td>31</td>
          </tr>
          <tr>
            <th>GitHub.</th>
            <td><a href='https://github.com/Ryusukeeee' target="_blank">@Ryusukeeee</a></td>
          </tr>
          <tr>
            <th>Qiita.</th>
            <td><a href="https://qiita.com/ryusukeeee" target="_blank">@ryusukeeee</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<script>
import pageTitle from '@/components/pageTitle'

export default {
  name: 'Home',

  components: {
    pageTitle
  }
}
</script>

<style scoped>
  .home {
    border-radius: 50px;
    margin: 20px auto;
  }
  .home table {
    padding: 50px 0px;
    font-size: 18px;
    display: inline-block;
    text-align: left;
  }
  .home table th {
    padding-right: 20px;
    font-weight: normal;
    vertical-align: middle;
  }
  .home table td {
    font-size: 20px;
    padding : 5px 0px;
  }
  .home table td a {
    margin: 0px;
    height: 25px;
    font-size: 18px;
    color: #6495ed;
    line-height: 25px;
    text-decoration: none;
  }
</style>
