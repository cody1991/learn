const config = require('config-lite')
const Mongolass = require('mongolass')
const mongolass = new Mongolass()

mongolass.connect(config.mongodb)

exports.User = mongolass.model('User', {
  name: {
    type: 'string'
  },
  password: {
    type: 'string'
  },
  gender: {
    type: 'string',
    enum: ['m', 'f', 'x']
  },
  bio: {
    type: 'string'
  }
})

// 根据用户名 找到唯一用户
exports.User.index({
  name: 1
}, {
  unique: true
}).exec()
