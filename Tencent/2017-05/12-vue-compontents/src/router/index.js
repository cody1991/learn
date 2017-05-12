import Vue from 'vue'
import Router from 'vue-router'

import demosRoutes from './demos'

let routes = demosRoutes

Vue.use(Router)

export default new Router({
  routes: routes
})
