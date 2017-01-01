const express = require('express');
const router = express.Router();
const PostModel = require('../models/posts.js');
const CommentModel = require('../models/comments.js');

const checkLogin = require('../middlewares/check.js').checkLogin;

router.get('/', (req, res, next) => {
    // res.send(req.flash());
    // res.render('posts'); 
    let author = req.query.author;
	// console.log(author);


    PostModel.getPosts(author)
        .then((posts) => {
            // console.log(posts);
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
            PostModel.incPv(postId),
            CommentModel.getComments(postId)
        ])
        .then((result) => {
            // console.log(result);
            let post = result[0];
            let comments = result[2]
            if (!post) {
                throw new Error('该文章不存在');
            }

            res.render('post', {
                post,
                comments
            });
        })
        .catch(next);
});

router.get('/:postId/edit', checkLogin, (req, res, next) => {
    // res.send(req.flash());
    let postId = req.params.postId;
    let author = req.session.user._id;

    PostModel.getRawPostById(postId)
        .then((post) => {
            if (!post) {
                throw new Error('该文章不存在');
            }
            if (author.toString() !== post.author._id.toString()) {
                throw new Error('权限不足')
            }
            res.render('edit', {
                post: post
            });
        })
        .catch(next);
});

router.post('/:postId/edit', checkLogin, (req, res, next) => {
    let postId = req.params.postId;
    let author = req.session.user._id;
    let title = req.fields.title;
    let content = req.fields.content;

    PostModel.updatePostById(postId, author, {
            title,
            content
        })
        .then(() => {
            req.flash('success', '编辑文章成功');
            res.redirect(`/posts/${postId}`)
        })
        .catch(next);
});

router.get('/:postId/remove', checkLogin, (req, res, next) => {
    // res.send(req.flash());
    let postId = req.params.postId;
    let author = req.session.user._id;

    PostModel.delPostById(postId, author)
        .then(() => {
            req.flash('success', '删除文章成功');
            res.redirect('/posts');
        })
        .catch(next);
});

// 创建留言
router.post('/:postId/comment', checkLogin, (req, res, next) => {
    // res.send(req.flash());
    let author = req.session.user._id;
    let postId = req.params.postId;
    let content = req.fields.content;
    let comment = {
        author,
        postId,
        content
    }

    CommentModel.create(comment)
        .then(() => {
            req.flash('success', '留言成功');
            res.redirect('back');
        })
        .catch(next);

});

router.get('/:postId/comment/:commentId/remove', checkLogin, (req, res, next) => {
    // res.send(req.flash());
    let commentId = req.params.commentId;
    // let author = req.session.user._id;

    CommentModel.delCommentById(commentId)
        .then(() => {
            req.flash('success', '删除评论成功');
            res.redirect('back');
        })
        .catch(next);
});

module.exports = router;
