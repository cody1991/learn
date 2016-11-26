const express = require('express');
const router = express.Router();
const sha1 = require('sha1');

const UserModel = require('../models/users');

const checkNotLogin = require('../middlewares/check.js').checkNotLogin;

router.get('/', checkNotLogin, (req, res, next) => {
    // res.send(req.flash());
    res.render('signin');
});

router.post('/', checkNotLogin, (req, res, next) => {
    // res.send(req.flash());
    let name = req.fields.name;
    let password = req.fields.password;

    UserModel.getUserByName(name)
        .then((user) => {
            if (!user) {
                req.flash('error', '用户不存在');
                return res.redirect('back');
            }
            if (sha1(password) !== user.password) {
                req.flash('error', '用户或密码错误');
                return res.redirect('back');
            }
            req.flash('success', '登陆成功');

            delete user.password;
            req.session.user = user;
            console.log(user);
            res.redirect('/posts');
        })
        .catch(next);
});

module.exports = router;
