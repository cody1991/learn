import axios from 'axios'

let url = process.env.NODE_ENV !== 'production' ? '/api/' : 'http://m.maizuo.com/v4/api/'

export default {
  getBannerList: function (cb) {
    axios.get(url + 'billboard/home?t=' + new Date() * 1 + '&callback=?', {
      withCredentials: true
    })
    .then(function (res) {
      if (res.status >= 200 && res.status < 300) {
        cb(res.data)
      }
    }).catch((error) => {
      return Promise.reject(error)
    })
  },
  getNowPlaying: function (cb) {
    axios.get(url + 'film/now-playing?_t=' + new Date() * 1 + '&page=1&count=5', {
      withCredentials: true
    })
    .then(function (res) {
      if (res.status >= 200 && res.status < 300) {
        cb(res.data)
      }
    }).catch((error) => {
      return Promise.reject(error)
    })
  },
  getNowPlayList: function (page, cb) {
    axios.get(url + 'film/now-playing?page=' + page + '&count=10')
      .then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          cb(res.data)
        }
      }).catch((error) => {
        return Promise.reject(error)
      })
  },
  getComingSoon: function (cb) {
    axios.get(url + 'film/coming-soon?__t=' + new Date() * 1 + '&page=1&count=3')
      .then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          cb(res.data)
        }
      }).catch((error) => {
        return Promise.reject(error)
      })
  },
  getComingList: function (page, cb) {
    axios.get(url + 'film/coming-soon?page=' + page + '&count=10')
      .then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          cb(res.data)
        }
      }).catch((error) => {
        return Promise.reject(error)
      })
  },
  getFilmDetail: function (id, cb) {
    axios.get(url + 'film/' + id + '?__t=' + new Date() * 1)
      .then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          cb(res.data)
        }
      }).catch((error) => {
        return Promise.reject(error)
      })
  },
  getCinemaList: function (id, cb) {
    axios.get(url + 'film/' + id + '/cinema?__t=' + new Date() * 1)
      .then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          cb(res.data)
        }
      }).catch((error) => {
        return Promise.reject(error)
      })
  },
  getScheduleList: function (filmid, cinemaid, cb) {
    axios.get(url + 'schedule?__t=' + new Date() * 1 + '&film=' + filmid + '&cinema=' + cinemaid)
      .then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          cb(res.data)
        }
      }).catch((error) => {
        return Promise.reject(error)
      })
  }
}
