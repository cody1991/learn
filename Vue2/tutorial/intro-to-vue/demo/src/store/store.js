import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 1
  },
  // showing things not mutating state
  getters: {
    tripleCounter: state => {
      return state.counter * 3
    },
    counter: state => {
      return state.counter
    }
  },
  // mutating the state
  // mutations are always synchronous
  mutations: {
    // showing passed with payload, represented as num
    increment: (state, num) => {
      state.counter += num
    },
    decrement: (state, num) => {
      state.counter -= num
    }
  },
  actions: {
    asyncDecrement: ({
      commit
    }, asyncNum) => {
      setTimeout(() => {
        commit('decrement', asyncNum.by)
      }, asyncNum.duration)
    },
    asyncIncrement: ({
      commit
    }, asyncNum) => {
      setTimeout(() => {
        commit('increment', asyncNum.by)
      }, asyncNum.duration)
    }
  }
})
