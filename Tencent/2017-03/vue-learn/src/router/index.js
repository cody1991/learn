import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import essentials from './essentials'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
  ...essentials
]

const router = new Router({
  routes
})

export default router
