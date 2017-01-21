import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)

import Home from './pages/Home'
import Users from './pages/Users'
import Signup from './pages/Signup'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    redirect: '/posts'
  }, {
    name: 'posts',
    path: '/posts',
    component: Home
  }, {
    path: '/users/:name',
    component: Users
  }, {
    name: 'signup',
    path: '/signup',
    component: Signup
  }]
})

// router.beforeEach((to, from, next) => {
//   const token = window.sessionStorage.getItem('demo-token')
//   if (to.path === '/') {
//     if (token !== 'null' && token !== null) {
//       next('/todolist')
//     }
//     next()
//   } else {
//     if (token !== 'null' && token !== null) {
//       axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
//       next()
//     } else {
//       next('/')
//     }
//   }
// })

router.beforeEach((to, from, next) => {
  axios.get('/api/auth')
    .then((res) => {
      const hadlogin = res.data.hadlogin
      if (to.path === '/signup' || to.path === '/signin') {
        if (hadlogin) {
          next('/posts')
        }
        next()
      } else {
        if (!hadlogin) {
          next('/signin')
        }
        next()
      }
    })
    .catch((err) => {
      console.log(err)
    })
  console.log(to.path)
})

module.exports = router
