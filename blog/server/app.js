const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const config = require('config-lite')
const pkg = require('../package')

app.use(session({
  resave: false,
  saveUninitialized: false,
  // 设置 cookie 中保存 session id 的字段名
  name: config.session.key,
  // 设置 secret 来计算 hash 值并放在 cookie ，生产 signedCookie 防止篡改
  secret: config.session.secret,
  cookie: {
    maxAge: config.session.maxAge
  },
  // session 存放在 mongodb
  store: new MongoStore({
    url: config.mongodb
  })
}))

app.use(flash())

app.locals.blog = {
  title: pkg.name,
  description: pkg.description
}

app.use(function (req, res, next) {
  res.locals.user = req.session.user
  res.locals.success = req.flash('success').toString()
  res.locals.error = req.flash('error').toString()
  next()
})

routes(app)

app.listen(config.port, () => {
  console.log(`${pkg.name} listening on port ${config.port}`)
})
