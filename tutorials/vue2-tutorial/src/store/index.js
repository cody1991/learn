import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

// this.$store.dispatch('savePlan', plan)当执行了这样的方法就会调用actions.js里的savePlan方法，而savePlan又会触发 mutations里的 types.SAVE_PLAN 最后修改数据视图更新

// mutation-types 记录我们所有的事件名

// mutations 注册我们各种数据变化的方法

// actions 则可以编写异步的逻辑或者是一些逻辑，再去commit 我们的事件

// 如果有getter 我们可以把一些需要处理返回的数据放在这即可，不进行业务操作
Vue.use(Vuex)

let localTotalTime = window.localStorage.getItem('totalTime') ? window.localStorage.getItem('totalTime') : 0;

let localList = window.localStorage.getItem('list') ? JSON.parse(window.localStorage.getItem('list')) : []

const state = {
	totalTime: parseInt(localTotalTime, 10),
	list: localList
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})