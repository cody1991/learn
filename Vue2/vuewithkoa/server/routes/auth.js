const users = require('../controllers/users.js')
const router = require('koa-router')()

console.log(users)
// 使用 users 的 auth 方法 引入 router
users.auth(router)

module.exports = router
