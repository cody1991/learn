import * as types from './mutation-types'

export default {
	// 增加总时间
	[types.ADD_TOTAL_TIME](state, time) {
		state.totalTime = state.totalTime + time

		window.localStorage.setItem('totalTime', state.totalTime)
	},
	// 减少总时间
	[types.DEC_TOTAL_TIME](state, time) {
		state.totalTime = state.totalTime - time

		window.localStorage.setItem('totalTime', state.totalTime)
	},
	// 新增计划
	[types.SAVE_PLAN](state, plan) {
		state.list.push(plan)

		window.localStorage.setItem('list', JSON.stringify(state.list))
	},
	// 删除计划
	[types.DELETE_PLAN](state, idx) {
		state.list.splice(idx, 1)

		window.localStorage.setItem('list', JSON.stringify(state.list))
	}
}