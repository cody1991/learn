import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import configRouter from './routers'
import {
    timeToNow,
    tansTab
} from './filters'

Vue.use(VueRouter)

const router = new VueRouter()
configRouter(router)

router.beforeEach((transition) => {
    document.body.scrollTop = 0
})

/* eslint-disable no-new */
new Vue({
    el: 'body',
    components: {
        App
    }
})
