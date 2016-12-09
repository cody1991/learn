'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Todo.hasMany(models.TodoItem, {
          foreignKey: 'todoId',
          as: 'todoItems'
        })
      }
    }
  });
  return Todo;
};