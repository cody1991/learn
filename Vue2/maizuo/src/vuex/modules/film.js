import api from '../api'
import * as types from '../types'

const state = {
  nowPlayingList: [],
  comingSoonList: [],
  nowPage: 0,
  comingPage: 0,
  getNowMore: true,
  getComingMore: true
}

const actions = {
  getNowPlayList: function ({
    commit
  }) {
    if (state.getNowMore) {
      commit(types.FILM_NOWPLAYING_NUM)
      commit(types.COM_LOADING_STATUS, true)

      api.getNowPlayList(state.nowPage, function (res) {
        commit(types.FILM_GET_NOWPLAYING, res.data)
        commit(types.COM_LOADING_STATUS, false)
      })
    }
  },
  getComingList: function ({
    commit
  }) {
    if (state.getComingMore) {
      commit(types.FILM_COMINGSOON_NUM)
      commit(types.COM_LOADING_STATUS, true)

      api.getComingList(state.comingPage, function (res) {
        commit(types.FILM_GET_COMINGSOON, res.data)
        commit(types.COM_LOADING_STATUS, false)
      })
    }
  }
}

const getters = {
  getNowPlayList: state => state.nowPlayingList,
  getComingList: state => state.comingSoonList
}

const mutations = {
  [types.FILM_GET_NOWPLAYING]: (state, res) => {
    state.nowPlayingList = state.nowPlayingList.concat(res.films)

    state.getNowMore = res.page.current < res.page.total
  },
  [types.FILM_NOWPLAYING_NUM]: (state) => {
    state.nowPage += 1
    state.getNowMore = false
  },
  [types.FILM_GET_COMINGSOON]: (state, res) => {
    state.comingSoonList = state.comingSoonList.concat(res.films)
    state.getComingMore = res.page.current < res.page.total
  },
  [types.FILM_COMINGSOON_NUM]: (state) => {
    state.nowPage += 1
    state.getComingMore = false
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
