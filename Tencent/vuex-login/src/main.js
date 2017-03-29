// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)
const appId = 'NJTXKlJil5LDH5ihQGuauYoB-gzGzoHsz'
const appKey = 'KyoPI3WsdtbucJmkgmfcQ4Yx'

window.AV.init({
  appId,
  appKey
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
