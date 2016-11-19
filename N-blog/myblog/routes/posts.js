const express = require('express');
const router = express.Router();
const PostModel = require('../models/posts.js');

const checkLogin = require('../middlewares/check.js').checkLogin;

router.get('/', (req, res, next) => {
    // res.send(req.flash());
    // res.render('posts'); 
    let author = req.query.author;
    console.log(author);

    PostModel.getPosts(author)
        .then((posts) => {
            console.log(posts);
            res.render('posts', {
                posts: posts
            });
        })
        .catch(next);
});

router.post('/', checkLogin, (req, res, next) => {
    let author = req.session.user._id;
    let title = req.fields.title;
    let content = req.fields.content;

    try {
        if (!title.length) {
            throw new Error('请填写标题');
        }
        if (!content.length) {
            throw new Error('请填写内容');
        }
    } catch (e) {
        req.flash('error', e.message);
        return res.redirect('back');
    }

    var post = {
        author: author,
        title: title,
        content: content,
        pv: 0
    }

    PostModel.create(post)
        .then((result) => {
            // 此 post 是插入 mongodb 后的值，包含 _id
            post = result.ops[0];
            req.flash('success', '发表成功');
            res.redirect(`/posts/${post._id}`);
        })
})

router.get('/create', checkLogin, (req, res, next) => {
    // res.send(req.flash());
    res.render('create');
});

router.get('/:postId', (req, res, next) => {
    // res.send(req.flash());
    let postId = req.params.postId;

    Promise.all([
            PostModel.getPostById(postId),
            PostModel.incPv(postId)
        ])
        .then((result) => {
            console.log(result);
            let post = result[0];
            if (!post) {
                throw new Error('该文章不存在');
            }

            res.render('post', {
                post: post
            });
        })
        .catch(next);
});

router.get('/:postId/edit', checkLogin, (req, res, next) => {
    res.send(req.flash());
});

router.get('/:postId/remove', checkLogin, (req, res, next) => {
    res.send(req.flash());
});

router.get('/:postId/comment', checkLogin, (req, res, next) => {
    res.send(req.flash());
});

router.get('/:postId/comment/:commentId/remove', checkLogin, (req, res, next) => {
    res.send(req.flash());
});

module.exports = router;
