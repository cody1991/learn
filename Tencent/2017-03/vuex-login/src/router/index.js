import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: resolve => require(['../page/index.vue'], resolve)
  }, {
    path: '/register',
    component: resolve => require(['../page/register.vue'], resolve)
  }, {
    path: '/login',
    component: resolve => require(['../page/login.vue'], resolve)
  }]
})
