const config = require('config-lite');
const Mongolass = require('mongolass');
const mongolass = new Mongolass();

const moment = require('moment');
const objectIdToTimestamp = require('objectid-to-timestamp');

mongolass.connect(config.mongodb);

mongolass.plugin('addCreatedAt', {
    afterFind(results) {
        results.forEach((item) => {
            item.created_at = moment(objectIdToTimestamp(item._id)).format('YYYY-MM-DD HH:mm');
        });
        return results;
    },
    afterFindOne(result) {
        if (result) {
            result.created_at = moment(objectIdToTimestamp(result._id)).format('YYYY-MM-DD HH:mm');
        }
        return result;
    }
});

exports.User = mongolass.model('User', {
    name: {
        type: 'string'
    },
    password: {
        type: 'string'
    },
    avatar: {
        type: 'string'
    },
    gender: {
        type: 'string',
        enum: ['m', 'f', 'x']
    },
    bio: {
        type: 'string'
    }
});

// 根据用户名找到用户，用户名全局唯一
exports.User.index({
    name: 1,
}, {
    unique: true
}).exec();

exports.Post = mongolass.model('Post', {
    author: {
        type: Mongolass.Types.ObjectId
    },
    title: {
        type: 'string'
    },
    content: {
        type: 'string'
    },
    pv: {
        type: 'number'
    }
});

// 按创建时间降序查看用户的文章列表
// exports.Post.index({
//     author: 1,
//     _id: -1
// }).exec();

exports.Comment = mongolass.model('Comment', {
    author: {
        type: Mongolass.Types.ObjectId
    },
    content: {
        type: 'string'
    },
    postId: {
        type: Mongolass.Types.ObjectId
    }
});


// 通过文章 id 获取该文章下所有留言，按留言创建时间升序
exports.Post.index({
    postId: 1,
    _id: 1
}).exec();

// 通过用户 id 和留言 id 删除一个留言
exports.Post.index({
    author: 1,
    _id: 1
}).exec();
