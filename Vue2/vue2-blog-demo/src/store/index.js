import Vue from 'vue'
import Vuex from 'vuex'

import demo from './modules/demo'
import status from './modules/status'

Vue.use(Vuex)

const debug = process.env.NOD_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    demo,
    status
  },
  strict: debug
})
