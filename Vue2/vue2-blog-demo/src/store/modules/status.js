import * as types from '../types'
import getScrollData from '../../utils/scroll'

const state = {
  // 测辣文章列表的开关
  articleList: false,
  scroll: {
    scrollTop: 0,
    scrollHeight: 0,
    windowHeight: 0,
    scrollBottom: 0
  }
}

const getters = {
  articleList: state => state.articleList
}

const mutations = {
  [types.ARTICLE_LIST]: (state) => {
    state.articleList = !state.articleList
  },
  [types.SCROLLDATA]: (state, scrollObj) => {
    state.scroll = scrollObj
  }
}

const actions = {
  articleListSwitch: ({
    commit
  }) => {
    commit(types.ARTICLE_LIST)
  },
  pushScrollData: ({
    commit
  }) => {
    commit(types.SCROLLDATA, getScrollData(), {
      silent: true
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
