import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import pageButton from '@/pages/pageButton'
import pageList from '@/pages/pageList'
import pageNav from '@/pages/pageNav'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/btn',
    name: 'btn',
    component: pageButton
  }, {
    path: '/list',
    name: 'list',
    component: pageList
  }, {
    path: '/nav',
    name: 'nav',
    component: pageNav
  }]
})
