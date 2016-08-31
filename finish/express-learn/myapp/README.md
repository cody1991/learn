    npm install express-generator -g

<hr/>

    $ express -h

      Usage: express [options] [dir]

      Options:

        -h, --help          output usage information
        -V, --version       output the version number
        -e, --ejs           add ejs engine support (defaults to jade)
            --hbs           add handlebars engine support
        -H, --hogan         add hogan.js engine support
        -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
            --git           add .gitignore
        -f, --force         force on non-empty directory

<hr/>

    启动这个应用（MacOS 或 Linux 平台）：

    $ DEBUG=myapp npm start
    Windows 平台使用如下命令：

    > set DEBUG=myapp & npm start

<hr/>

路由（Routing）是由一个 URI（或者叫路径）和一个特定的 HTTP 方法（GET、POST 等）组成的，涉及到应用如何响应客户端对某个网站节点的访问。

每一个路由都可以有一个或者多个处理器函数，当匹配到路由时，这个/些函数将被执行。

路由的定义由如下结构组成：app.METHOD(PATH, HANDLER)。其中，app 是一个 express 实例；METHOD 是某个 HTTP 请求方式中的一个；PATH 是服务器端的路径；HANDLER 是当路由匹配到时需要执行的函数。


Express 定义了如下和 HTTP 请求对应的路由方法： get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, 和 connect。

app.all() 是一个特殊的路由方法，没有任何 HTTP 方法与其对应，它的作用是对于一个路径上的所有请求加载中间件。

路由路径和请求方法一起定义了请求的端点，它可以是字符串、字符串模式或者正则表达式。

Express 使用 [path-to-regexp](https://www.npmjs.com/package/path-to-regexp) 匹配路由路径，
