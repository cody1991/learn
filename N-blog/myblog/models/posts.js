const Post = require('../lib/mongo.js').Post;
const marked = require('marked');

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
    }
}
