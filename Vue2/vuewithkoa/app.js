const app = require('koa')()
const koa = require('koa-router')()
const json = require('koa-json')
const logger = require('koa-logger')
const auth = require('./server/routes/auth.js')


app.use(require('koa-bodyparser')())
app.use(json())
app.use(logger())

app.use(function* (next) {
  let start = new Date()
  yield next 
  let ms = new Date() - start
  // 显示执行的时间
  console.log('%s %s - %s', this.method, this.url, ms)
})

app.on('error', function(err, ctx) {
  console.log('server error', err)
})

// 挂载到 koa-router 上，让所有的 auth 请求路径前面加上 '/auth' 路径
koa.use('/auth', auth.routes())

// 把路由规则挂载到 koa 上
app.use(koa.routes())


app.listen(8889, () => {
  console.log('Koa is listening in 8889')
})

module.exports = app
