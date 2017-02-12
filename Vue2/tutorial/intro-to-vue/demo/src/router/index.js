import Vue from 'vue'
import Router from 'vue-router'
import Part1 from '../components/part-1'
import Part2 from '../components/part-2'
import Part3 from '../components/part-3'
import Part4 from '../components/part-4'
import Part5 from '../components/part-5'
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
    path: '/part-3',
    name: 'part-3',
    component: Part3
  }, {
    path: '/part-4',
    name: 'part-4',
    component: Part4
  }, {
    path: '/part-5',
    name: 'part-5',
    component: Part5
  }, {
    path: '/wine',
    name: 'wine',
    component: wine
  }]
})
