import Vue from 'vue'
import App from './App'
// import Hello from './components/Hello.vue'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()
  /* eslint-disable no-new */

router.map({
  '/time-entries': {
    component: TimeEntries,
    subRoutes: {
      '/log-time': {
        component: LogTime
      }
    }
  },
  '/home': {
    component: Home
  }
})

// router.redirect({
//   '*': '/hello'
// })

router.start(App, '#app')
