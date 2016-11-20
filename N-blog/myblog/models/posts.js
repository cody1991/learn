const Post = require('../lib/mongo.js').Post;
const marked = require('marked');
const ComentModel = require('./comments');

Post.plugin('addCommentsCount', {
    afterFind(posts) {
        return Promise.all(posts.map((post) => {
            return ComentModel.getCommentsCount(post._id)
                .then((commentsCount) => {
                    post.commentsCount = commentsCount;
                    return post;
                })
        }))
    },
    afterFindOne(post) {
        if (post) {
            return ComentModel.getCommentsCount(post._id)
                .then((count) => {
                    post.commentsCount = count;
                    return post;
                })
        }
    }
})

Post.plugin('contentToHtml', {
    afterFind(posts) {
        return posts.map((post) => {
            post.content = marked(post.content);
            return post;
        });
    },
    afterFindOne(post) {
        if (post) {
            post.content = marked(post.content);
        }
        return post;
    }
})

module.exports = {
    create(post) {
        return Post.create(post).exec();
    },
    getPostById(postId) {
        return Post
            .findOne({
                _id: postId
            })
            .populate({
                path: 'author',
                model: 'User'
            })
            .addCreatedAt()
            .addCommentsCount()
            .contentToHtml()
            .exec();
    },
    getPosts(author) {
        let query = {};
        if (author) {
            query.author = author;
        }
        // 我们在 PostModel 上注册了 contentToHtml，而 addCreatedAt 是在 lib/mongo.js 中 mongolass 上注册的
        return Post
            .find(query)
            .populate({
                path: 'author',
                model: 'User'
            })
            .sort({
                _id: -1
            })
            .addCreatedAt()
            .addCommentsCount()
            .contentToHtml()
            .exec();
    },
    incPv(postId) {
        return Post
            .update({
                _id: postId
            }, {
                $inc: {
                    pv: 1
                }
            })
            .exec();
    },
    // 通过文章 id 获取一篇原生文章（编辑文章）
    getRawPostById(postId) {
        return Post
            .findOne({
                _id: postId
            })
            .populate({
                path: 'author',
                model: 'User'
            })
            .exec();
    },
    // 通过用户 id 和文章 id 更新一篇文章
    updatePostById(postId, author, data) {
        return Post
            .update({
                author: author,
                _id: postId
            }, {
                $set: data
            })
            .exec();
    },
    delPostById(postId, author) {
        return Post
            .remove({
                author: author,
                _id: postId
            })
            .exec();
    }
}
