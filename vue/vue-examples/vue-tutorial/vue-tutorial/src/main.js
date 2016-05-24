import Vue from 'vue'
import App from './App'
import Hello from './components/Hello.vue'
import Home from './components/Home.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()
  /* eslint-disable no-new */

router.map({
  '/hello': {
    component: Hello
  },
  '/home': {
    component: Home
  }
})

// router.redirect({
//   '*': '/hello'
// })

router.start(App, '#app')
