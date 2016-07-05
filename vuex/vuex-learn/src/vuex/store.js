import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    // 初始状态
    count: 0
}

const mutations = {
    // 状态变更函数
    INCREMENT(state, amount) {
        state.count = state.count + amount;
    }
}

export default new Vuex.Store({
    state,
    mutations
});

// store.dispatch('INCREMENT');
// console.log(store.state.count) // -> 1

// store.dispatch({
// type:'INCREMENT'
// })
