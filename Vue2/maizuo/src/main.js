// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './config'
import App from './App'
import store from './vuex'

import router from './router'

Vue.directive('scroll', {
  bind: function (el, binding) {
    window.addEventListener('scroll', () => {
      let func = binding.value
      func(el)
    })
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
