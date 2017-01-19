const db = require('../config/db.js')
const userModel = '../schema/users.js'

const TodoListDb = db.TodoList

// 用 sequelize 的 import 方法引入表结构，实例化了 Users
const Users = TodoListDb.import(userModel)

// 注意是 function* ，需要 yield 操作的函数都需要这种 generator 函数
const getUserById = function* (id) {
  const userInfo = yield Users.findOne({
    where: {
      id: id
    }
  })

  return userInfo
}

module.exports = {
  getUserById
}
