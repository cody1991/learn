const db = require('../config/db.js')
const todoModel = '../schema/lists.js'

const TodolistDb = db.Todolist
const Todolist = TodolistDb.import(todoModel)

const getTodolistById = function* (id) {
  const todolist = yield Todolist.findAll({
    where: {
      user_id: id
    },
    // 只要这三个字段就可以了
    attributes: ['id', 'content', 'status']
  })

  return todolist
}

const createTodolist = function* (data) {
  yield Todolist.create({
    user_id: data.id,
    content: data.content,
    status: data.status
  })
  return true
}

const removeTodolist = function* (id, user_id) {
  yield Todolist.destroy({
    where: {
      id,
      user_id
    }
  })
  return true
}

const updateTodolist = function* (id, user_id, status) {
  yield Todolist.update({
    status
  },{
    where: {
      id,
      user_id
    }
  })
  return true
}

module.exports = {
  getTodolistById,
  createTodolist,
  removeTodolist,
  updateTodolist
}
