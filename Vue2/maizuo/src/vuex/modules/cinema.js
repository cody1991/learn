import api from '../api'
import * as types from '../types'

const state = {
  list: [],
  district: []
}

const actions = {
  getCinemaList: function ({
    commit
  }, id) {
    commit(types.COM_LOADING_STATUS, true)
    api.getCinemaList(id, function (res) {
      commit(types.CINEMA_GET_LIST, res.data)
      commit(types.COM_LOADING_STATUS, false)
    })
  }
}

const getters = {
  getCinemaList: state => state.list,
  getDistrict: state => state.district
}

const mutations = {
  [types.CINEMA_GET_LIST]: (state, res) => {
    // 接口没有区域影院没有进行区分就返回，故只能前端进行分类
    // 先将列表遍历一遍，相关地区归入一个数组
    // 进行数组去重并按照拼音首字母进行排列
    // 数组去重
    // eslint 不让添加
    // Array.prototype.unique = function () {
    //   let obj = {}
    //   return this.filter((item) => {
    //     return (!obj[item] && (obj[item] = 1))
    //   })
    // }
    let unique = function (arr, str) {
      let obj = {}
      return arr.filter((item) => {
        return (!obj[item[str]] && (obj[item[str]] = 1))
      })
    }
    let district = []
    let _json = {}

    for (let item of res.cinemas) {
      _json = {
        name: item.district.name,
        pinyin: item.district.pinyin
      }

      district.push(_json)
    }

    district = unique(district, 'name')

    district.sort(function (a, b) {
      return a.pinyin.localeCompare(b.pinyin.charAt(0))
    })

    console.log(JSON.stringify(district))

    state.district = district
    state.list = res.cinemas
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
