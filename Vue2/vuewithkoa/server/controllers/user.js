const user = require('../models/user.js')
const jwt = require('koa-jwt')

const getUserInfo = function* () {
  // 获取 url 里面传来的 id
  const id = this.params.id
  // 通过 yield 同步返回查询结果
  const result = yield user.getUserById(id)
  // 把请求结果放到 response 的 body 返回
  this.body = result
}

const postUserAuth = function* () {
  // post 过来的数据存在了 request.body
  const data = this.request.body
  const userInfo = yield user.getUserByName(data.name)

  if (userInfo !== null) {
    if (userInfo.password !== data.password) {
      this.body = {
        success: false,
        info: '密码错误'
      }
    } else {
      const userToken = {
        name: userInfo.username,
        id: userInfo.id
      }
      // 指定密钥，判断 token 合法性
      const secret = 'vue-koa-demo'
      const token = jwt.sign(userToken, secret)
      this.body = {
        success: true,
        token: token
      }
    }
  } else {
    this.body = {
      success: false,
      info: '用户不存在!'
    }
  }
}

module.exports = {
  auth: (router) => {
    router.get('/user/:id', getUserInfo);
    router.post('/user', postUserAuth)
  }
}

