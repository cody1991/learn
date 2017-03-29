import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import UserProfile from '@/components/UserProfile'
import UserHome from '@/components/UserHome'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/user/:username/post/:post_id',
    component: User,
    children: [{
      name: 'user',

      path: '',
      component: UserHome
    }, {
      path: 'profile',
      component: UserProfile
    }]
  }]
})
