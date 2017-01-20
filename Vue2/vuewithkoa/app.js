const app = require('koa')()
const koa = require('koa-router')()
const json = require('koa-json')
const logger = require('koa-logger')
const auth = require('./server/routes/auth.js')
const api = require('./server/routes/api.js')
const path = require('path')
const serve = require('koa-static')
const historyApiFallback = require('koa-history-api-fallback')
const jwt = require('koa-jwt')



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

app.use(function* (next) {
  try {
    yield next
  } catch (err) {
    if (401 === err.status) {
      this.status = 401
      this.body = {
        success: false,
        token: null,
        info: 'Protected resource, use Authorization header to get access'
      }
    } else {
      throw err
    }
  }
})

app.on('error', function(err, ctx) {
  console.log('server error', err)
})

// 挂载到 koa-router 上，让所有的 auth 请求路径前面加上 '/auth' 路径
koa.use('/auth', auth.routes())

// 所有走/api/打头的请求都需要经过jwt中间件的验证。secret密钥必须跟我们当初签发的secret一致
koa.use('/api', jwt({secret: 'vue-koa-demo'}), api.routes())
// 把路由规则挂载到 koa 上
app.use(koa.routes())

app.use(historyApiFallback())
app.use(serve(path.resolve('dist')))

app.listen(8889, () => {
  console.log('Koa is listening in 8889')
})

module.exports = app
