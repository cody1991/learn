const express = require('express');
const router = express.Router();

const checkLogin = require('../middlewares/check.js').checkLogin;

router.get('/', checkLogin, (req, res, next) => {
    // res.send(req.flash());

    req.session.user = null;
    req.flash('success', '登出成功');

    res.redirect('/posts');
});

module.exports = router;
