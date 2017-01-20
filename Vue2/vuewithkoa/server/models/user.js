const db = require('../config/db.js')
const userModel = '../schema/users.js'

const TodoListDb = db.Todolist

// 用 sequelize 的 import 方法引入表结构，实例化了 Users
const User = TodoListDb.import(userModel)

// 注意是 function* ，需要 yield 操作的函数都需要这种 generator 函数
const getUserById = function* (id) {
  const userInfo = yield User.findOne({
    where: {
      id: id
    }
  })

  return userInfo
}

const getUserByName = function* (name) {
  const userInfo = yield User.findOne({
    where: {
      username: name
    }
  })
  return userInfo
}

module.exports = {
  getUserById,
  getUserByName
}
