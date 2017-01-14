// 路由

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'home',
  component: require('./pages/home')
}, {
  path: '/detail/:id',
  name: 'detail',
  component: require('./pages/detail')
}, {
  path: '/cinema/:id',
  name: 'cinema',
  component: require('./pages/cinema')
}, {
  path: '/film/:type',
  name: 'film',
  component: require('./pages/film')
}]

const router = new VueRouter({
  routes: routes,
  history: true,
  linkActiveClass: 'active'
})

export default router
