import Vue from 'vue'
import Router from 'vue-router'
import Part1 from '../components/part-1'
import Part2 from '../components/part-2'
import wine from '../components/part-2-wine-label-maker.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/part-1'
  }, {
    path: '/part-1',
    name: 'part-1',
    component: Part1
  }, {
    path: '/part-2',
    name: 'part-2',
    component: Part2
  }, {
    path: '/wine',
    name: 'wine',
    component: wine
  }]
})
