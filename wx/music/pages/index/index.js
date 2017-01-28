//index.js
//获取应用实例
var app = getApp()
let rotate = 0
Page({
  onReady: function() {
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    name: '',
    musicUrl: '',
    picUrl: '',
    page: '',
    singer: '',
    input: '',
    transform: '',
    rotateFlag: false
  },
  onLoad: function () {
    this.getMusicInfos('告白气球')
  },
  myRotate: function() {
    rotate++
    let transform = `transform:rotate(${rotate}deg);`
    this.setData({
      transform
    })

    // console.log(this.data.transform)

    const animation = setTimeout(() => {
      this.myRotate()
    }, 30)

    if (!this.data.rotateFlag) {
       clearTimeout(animation)
    }
  },
  toggleRotate: function() {
    if (this.data.rotateFlag) {
      this.pauseMusic()
      this.audioCtx.pause()
    } else {
      this.playMusic()
      this.audioCtx.play()
    }
  },
  playMusic: function() {
    this.setData({
      rotateFlag:true
    })
    this.myRotate()
  },
  pauseMusic: function() {
    this.setData({
      rotateFlag: false
    })
  },
  bindMusicNameInput: function(e) {
    this.setData({
      input: e.detail.value
    })
  },
  bindSearch: function(e) {
    this.getMusicInfos(this.data.input)
  },
  getMusicInfos: function(musicname) {
    wx.request({
      url: 'http://localhost:3000',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        musicname
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: (res) => {
        // success
        const {
          name,
          picUrl,
          musicUrl,
          page,
          singer
        } = res.data
        console.log(this.data)
        this.setData({
          name,
          picUrl,
          musicUrl,
          page,
          singer,
          rotateFlag: false
        })

        rotate = 0
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
