import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import 'bootstrap/dist/css/bootstrap.css'

import App from './App.vue'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
	path: '/',
	component: Home
}, {
	path: '/home',
	component: Home
}, {
	path: '/time-entries',
	component: TimeEntries
}]

const router = new VueRouter({
	routes
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	},
	router
})