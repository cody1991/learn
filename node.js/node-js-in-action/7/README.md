    var http = require('http');
    var connect = require('connect');
    var bodyParser = require('body-parser');
    var logger = require('morgan');

    var app = connect()
      .use(logger('dev'))
      .use(connect.static('public'))
      .use(bodyParser.urlencoded({
          extended: true
      }))
      .use(bodyParser.json())
      .use(function(req, res){
        res.end(JSON.stringify(req.body));
      })

    http.createServer(app).listen(2081);

- [body-parser](https://www.npmjs.com/package/body-parser) - previous `bodyParser`, `json`, and `urlencoded`. You may also be interested in:
    - [body](https://www.npmjs.com/package/body)
    - [co-body](https://www.npmjs.com/package/co-body)
    - [raw-body](https://www.npmjs.com/package/raw-body)
- [compression](https://www.npmjs.com/package/compression) - previously `compress`
- [connect-timeout](https://www.npmjs.com/package/connect-timeout) - previously `timeout`
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) - previously `cookieParser`
- [cookie-session](https://www.npmjs.com/package/cookie-session) - previously `cookieSession`
- [csurf](https://www.npmjs.com/package/csurf) - previously `csrf`
- [errorhandler](https://www.npmjs.com/package/errorhandler) - previously `error-handler`
- [express-session](https://www.npmjs.com/package/express-session) - previously `session`
- [method-override](https://www.npmjs.com/package/method-override) - previously `method-override`
- [morgan](https://www.npmjs.com/package/morgan) - previously `logger`
- [response-time](https://www.npmjs.com/package/response-time) - previously `response-time`
- [serve-favicon](https://www.npmjs.com/package/serve-favicon) - previously `favicon`
- [serve-index](https://www.npmjs.com/package/serve-index) - previously `directory`
- [serve-static](https://www.npmjs.com/package/serve-static) - previously `static`
- [vhost](https://www.npmjs.com/package/vhost) - previously `vhost`
