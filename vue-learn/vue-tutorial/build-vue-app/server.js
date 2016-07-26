const express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    flash = require('flash'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    uuid = require('node-uuid'),
    appDate = require('./data.json');

const userData = appDate.users;
exclamationData = appDate.exclamations;

function getUser(username) {
    const user = userData.find(u => u.username === username);
    return Object.assign({}, user);
}

const PORT = process.env.PORT || 3000;
const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    entended: false
}));

server.use(session({
    secret: process.env.SESSION_SECRET || 'awesomecookiesecret',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        url: process.env.MONGO_URL || 'mongodb://localhost/vue2-auth'
    })
}));

server.use(flash());

server.use(express.static('public'));
server.use(passport.initialize());
server.use(passport.session());

server.set('views', './views');
server.set('view engine', 'pug');

// 这是一段相当标准的 Passport 代码。我们会告诉 Passport 我们本地的策略，当它尝试验证，我们会从用户数据中找到该用户，如果该用户存在且密码正确，那么我们继续前进，否则我们会返回一条消息给用户。同时我们也会把用户的名称放到session中，当我们需要获取用户消息的时候，我们可以直接通过 session 中的用户名查找到用户。
passport.use(new LocalStrategy(
    username, password, done) => {
    const user = getUser(username);
    if (!user || user.password !== password) {
        return done(null, false, {
            message: 'Username and password combination is wrong'
        })
    }
    delete user.password;
    return done(null, user);
});


passport.deserializeUser((username, done) => {
    const user = getUser(username);
    delete user.password;
    done(null, user);
});
// 让我们过一下这段代码。hasScope 方法检查请求中的用户是否有所需的特定权限，我们通过传入一个字符串去调用该方法，它会返回一个服务端使用的中间件。canDelete 方法是类似的，不过它同时检查用户是否拥有这个 exclamation 以及是否拥有删除权限，如果都没有的话用户就不能删除这条 exclamation。这些方法稍后会被用到一个简单的路由上。最后，我们实现了 isAuthenticated，它仅仅是检查这个请求中是否包含用户字段来判断用户是否登录。
function hasScope(scope) {
    return (req, res, next) => {
        const { scopes } = req.user;
        if (!scopes.includes(scope)) {
            req.flash('error', 'The username and password are not valid');
            return res.redirect('/');
        }
        return next();
    };
}

function canDelete(req, res, next) {
    const { scopes, username } = req.user;
    const { id } = req.params;
    const exclamation = exclamationData.find(exc => exc.id === id);
    if (!exclamation) {
        return res.sendStatus(404);
    }
    if (exclamation.user !== username && !scopes.includes('delete')) {
        return res.status(403).json({
            message: "You can't delete that exclamation"
        });
    }
    return next();
}

function isAuthenticated(req, res, next) {
    if (!req.user) {
        req.flash('error', 'You must be logged in');
        return res.redirect('/');
    }
    return next();
}

server.get('/', (req, res) => {
    if (req.user) {
        return res.redirect('/dashboard');
    }
    return res.render('index');
});

server.get('/dashboard', isAuthenticated, (req, res) => {
    res.render('dashboard');
});

const authRoutes = express.Router();

authRoutes.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/',
        successRedirect: '/dashboard',
        failureFlash: true
    })
);

server.use('/auth', authRoutes);

const apiRoutes = express.Router();

apiRoutes.use(isAuthenticated);

apiRoutes.get('/me', (req, res) => {
    res.json({
        user: req.user
    })
});

apiRoutes.get('/exclamations', hasScope('read'), (req, res) => {
    const exclamations = exclamationData;
    res.json({
        exclamations
    });
});

apiRoutes.post('/exclamations', hasScope('add'), (req, res) => {
    const { username } = req.user;
    const { text } = req.body;
    const exclamation = {
        id: uuid.v4(),
        text,
        user: username
    };
    exclamationData.unshift(exclamation);

    res.status(201).json({
        exclamation
    });
});

apiRoutes.delete('/exclamations/:id', canDelete, (req, res) => {
    const { id } = req.params;
    const exclamationIndex = exclamationData.findIndex(exc => exc.id === id);
    exclamationData.splice(exclamationIndex, 1);
    res.sendStatus(204);
});

server.use('/api', apiRoutes);

server.listen(PORT, () => {
    console.log(`The API is listening on port ${PORT}`);
});
