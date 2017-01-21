module.exports = function (app) {
  app.use('/api/signup', require('./signup'))
  app.use('/api/signin', require('./signin'))
  app.use('/api/signout', require('./signout'))
  app.use('/api/posts', require('./posts'))
  app.use('/api/auth', require('../middlewares/check'))
}
