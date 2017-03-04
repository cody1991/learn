import * as types from './mutation-types.js'

export default {
  [types.INIT_FROM_LS]: (state, info) => {
    console.log(info)

    if (window.localStorage.getItem('subscribeList')) {
      state.subscribeList = JSON.parse(window.localStorage.getItem('subscribeList'))
    } else {
      state.subscribeList = []
    }
  },
  // 搜索列表中，订阅公众号
  [types.SUBSCRIBE_MP]: (state, mp) => {
    state.subscribeList.push(mp)
    for (let item of state.mpList) {
      if (item.weixinhao === mp.weixinhao) {
        let idx = state.mpList.indexOf(item)
        state.mpList[idx].isSubscribed = true
        break
      }
    }

    console.log('订阅: ' + mp.mpName)

    window.localStorage.setItem('subscribeList', JSON.stringify(state.subscribeList))
  },
  // sidebar 中取消某公众号订阅
  [types.UNSUBSCRIBE_MP]: (state, weixinhao) => {
    let idx
    for (let item of state.mpList) {
      if (item.weixinhao === weixinhao) {
        idx = state.mpList.indexOf(item)
        state.mpList[idx].isSubscribed = false
        break
      }
    }
    for (let item of state.subscribeList) {
      if (item.weixinhao === weixinhao) {
        idx = state.subscribeList.indexOf(item)
        console.log('取消订阅: ' + item.mpName)
        break
      }
    }

    state.subscribeList.splice(idx, 1)

    window.localStorage.setItem('subscribeList', JSON.stringify(state.subscribeList))
  },
  // 搜索列表更新
  [types.ADD_SEARCHRESULT_LIST]: (state, mps) => {
    state.mpList = state.mpList.concat(mps)
  },
  // 在搜索列表中，取消某公众号订阅
  [types.UNSUBSCRIBE_SEARCHRESULT]: (state, weixinhao) => {
    let idx
    for (let item of state.mpList) {
      if (item.weixinhao === weixinhao) {
        idx = state.mpList.indexOf(item)
        state.mpList[idx].isSubscribed = false
        break
      }
    }
    for (let item of state.subscribeList) {
      if (item.weixinhao === weixinhao) {
        idx = state.subscribeList.indexOf(item)
        console.log('取消订阅: ' + item.mpName)
        break
      }
    }
    state.subscribeList.splice(idx, 1)
  },
  // 清空搜索列表
  [types.CLEAR_SEARCHRESULT]: (state, info) => {
    console.log('clear search result: ' + info)
    state.mpList = []
  }
}
