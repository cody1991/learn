const express = require('express');
const router = express.Router();

const supplies = ['mop', 'broom', 'duster'];

// express 中的中间件（middleware）就是用来处理请求的，当一个中间件处理完，可以通过调用 next() 传递给下一个中间件，如果没有调用 next()，则请求不会往下传递，如内置的 res.render 其实就是渲染完 html 直接返回给客户端，没有调用 next()，从而没有传递给下一个中间件。

router.get('/:name', (req, res) => {
    // res.send(`hello,  ${req.params.name} your age is ${req.query.age} `);
    res.render('users', {
        name: req.params.name,
        supplies: supplies
    });
});

module.exports = router;
