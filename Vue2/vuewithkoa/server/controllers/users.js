const users = require('../models/users.js')
console.log(users)
const getUserInfo = function* () {
  // 获取 url 里面传来的 id
  const id = this.params.id
  // 通过 yield 同步返回查询结果
  const result = yield users.getUserById(id)
  // 把请求结果放到 response 的 body 返回
  this.body = result
}

module.exports = {
  auth: (router) => {
    router.get('/user/:id', getUserInfo)
  }
}

