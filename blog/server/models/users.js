const User = require('../lib/mongo').User

module.exports = {
  create (user) {
    return User.create(user).exec()
  }
}
