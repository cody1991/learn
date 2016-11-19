const path = require('path'),
    express = require('express'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    flash = require('connect-flash'),
    config = require('config-lite'),
    routes = require('./routes'),
    pkg = require('./package');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    resave: false,
    saveUninitialized: false,
    name: config.session.key,
    secret: config.session.secret,
    cookie: {
        maxAge: config.session.maxAge
    },
    store: new MongoStore({
        url: config.mongodb
    })
}));

app.use(flash());

app.use(require('express-formidable')({
    uploadDir: path.join(__dirname, 'public/img'),
    keepExtensions: true
}));

// 在调用 res.render 的时候，express 合并（merge）了 3 处的结果后传入要渲染的模板，优先级：res.render 传入的对象> res.locals 对象 > app.locals 对象，所以 app.locals 和 res.locals 几乎没有区别，都用来渲染模板，使用上的区别在于：app.locals 上通常挂载常量信息（如博客名、描述、作者信息），res.locals 上通常挂载变量信息，即每次请求可能的值都不一样（如请求者信息，res.locals.user = req.session.user）。

app.locals.blog = {
    title: pkg.name,
    description: pkg.description
}

// 这样在调用 res.render 的时候就不用传入这四个变量了，express 为我们自动 merge 并传入了模板，所以我们可以在模板中直接使用这四个变量。
app.use((req, res, next) => {
    res.locals.user = req.session.user;
    res.locals.success = req.flash('success').toString();
    res.locals.error = req.flash('error').toString();

    // console.log(res.locals);
    next();
});

routes(app);

// 中间件的加载顺序很重要。如上面设置静态文件目录的中间件应该放到 routes(app) 之前加载，这样静态文件的请求就不会落到业务逻辑的路由里；flash 中间件应该放到 session 中间件之后加载，因为 flash 是基于 session 的。

app.listen(config.port, () => {
    console.log(`${pkg.name} listening on port ${config.port}`);
});
