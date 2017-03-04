import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

const state = {
  mpList: [], // 搜索的结果
  subscribeList: [] // 订阅的列表
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
