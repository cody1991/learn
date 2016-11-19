const path = require('path');
const express = require('express');

const indexRouter = require('./routes/index.js');
const userRouter = require('./routes/users.js');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 通过 app.use 加载中间件，在中间件中通过 next 将请求传递到下一个中间件，next 可接受一个参数接收错误信息，如果使用了 next(error)，则会返回错误而不会传递到下一个中间件

app.use((req, res, next) => {
    console.log(1);
    next();
});

app.use((req, res, next) => {
    console.log(1);
    next(new Error('haha'));
    // next();
});



app.use('/', indexRouter);
app.use('/users', userRouter);

// 上面的例子中， 应用程序为我们自动返回了错误栈信息（ express 内置了一个默认的错误处理器）， 假如我们想手动控制返回的错误内容， 则需要加载一个自定义错误处理的中间件

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('something error');
});

app.listen(3000);
