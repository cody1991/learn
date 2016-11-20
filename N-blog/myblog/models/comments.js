const marked = require('marked');
const Comment = require('../lib/mongo.js').Comment;

Comment.plugin('contentToHtml', {
    afterFind(comments) {
        return comments.map((comment) => {
            comment.content = marked(comment.content);
            return comment;
        })
    }
});

module.exports = {
    create(comment) {
        return Comment
            .create(comment)
            .exec();
    },
    delCommentById(commentId) {
        return Comment
            .remove({
                _id: commentId
            })
            .exec();
    },
    getComments(postId) {
        return Comment
            .find({
                postId
            })
            .populate({
                path: 'author',
                model: 'User'
            })
            .sort({
                _id: 1
            })
            .addCreatedAt()
            .contentToHtml()
            .exec();
    },
    getCommentsCount(postId) {
        return Comment
            .count({
                postId
            })
            .exec();
    }
}
