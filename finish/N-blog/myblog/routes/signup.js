const express = require('express');
const router = express.Router();
const path = require('path');
const sha1 = require('sha1');

const UserModel = require('../models/users.js');

const checkNotLogin = require('../middlewares/check.js').checkNotLogin;

router.get('/', checkNotLogin, (req, res, next) => {
    // res.send(req.flash());
    res.render('signup');
});

router.post('/', checkNotLogin, (req, res, next) => {
    // res.send(req.flash());
    let name = req.fields.name;
    let gender = req.fields.gender;
    let bio = req.fields.bio;
    let avatar = req.files.avatar.path.split(path.sep).pop();
    let password = req.fields.password;
    let repassword = req.fields.repassword;

    // console.log(avatar);

    try {
        if (!(name.length >= 1 && name.length <= 10)) {
            throw new Error('名字请限制在 1-10 个字符');
        }
        if (['m', 'f', 'x'].indexOf(gender) === -1) {
            throw new Error('性别只能是m，f或者x');
        }
        if (!(bio.length >= 1 && bio.length <= 30)) {
            throw new Error('个人简介请限制在1-30个字符');
        }
        if (password.length < 6) {
            throw new Error('密码至少6个字符');
        }
        if (password !== repassword) {
            throw new Error('两次输入密码不一样');
        }
    } catch (e) {
        req.flash('error', e.message);
        return res.redirect('/signup');
    }

    password = sha1(password);

    var user = {
        name: name,
        password: password,
        gender: gender,
        bio: bio,
        avatar: avatar
    }

    UserModel.create(user)
        .then((result) => {
            // 此 user 是插入 mongodb 后的值，包含 _id
            user = result.ops[0];
            delete user.password;

            // // 将用户信息存入 session
            req.session.user = user;

            req.flash('success', '注册成功');

            res.redirect('/posts');
        })
        .catch((e) => {
            // 用户名被占用则跳回注册页，而不是错误页
            if (e.message.match('E11000 duplicate key')) {
                req.flash('error', '用户名已被占用');
                return res.redirect('/signup');
            };
            next(e);
        });
});

module.exports = router;
