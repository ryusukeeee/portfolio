import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Skill from '@/pages/Skill'
import Works from '@/pages/Works'
import Posts from '@/pages/Posts'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/Works',
      name: 'Works',
      component: Works
    },
    {
      path: '/Posts',
      name: 'Posts',
      component: Posts
    }
  ]
})
