const user = require('../controllers/user.js')
const router = require('koa-router')()

console.log(user)
// 使用 users 的 auth 方法 引入 router
user.auth(router)

module.exports = router
