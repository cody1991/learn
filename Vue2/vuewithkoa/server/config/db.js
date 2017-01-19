const Sequelize = require('sequelize')

const TodoList = new Sequelize('mysql://root:cody1991@localhost/todolist', {
  define: {
    // 取消 sequelize 自动给数据库加入的时间戳 createdAt updatedAt
    timestamps: false
  }
})

module.exports = {
  TodoList
}
