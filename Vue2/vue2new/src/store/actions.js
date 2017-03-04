import * as types from './mutation-types.js'

export default {
  subscribeMp: ({
    commit
  }, mp) => {
    commit(types.SUBSCRIBE_MP, mp)
  },
  unsubscribeMp: ({
    commit
  }, weixinhao) => {
    commit(types.UNSUBSCRIBE_MP, weixinhao)
  },
  addSearchResultList: ({
    commit
  }, mp) => {
    commit(types.ADD_SEARCHRESULT_LIST, mp)
  },
  unsubSearchResult: ({
    commit
  }, weixinhao) => {
    commit(types.UNSUBSCRIBE_SEARCHRESULT, weixinhao)
  },
  clearSearchResult: ({
    commit
  }, info) => {
    commit(types.CLEAR_SEARCHRESULT, info)
  },
  initFromLS: ({
    commit
  }, info) => {
    commit(types.INIT_FROM_LS, info)
  }
}
