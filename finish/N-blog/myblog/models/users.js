var User = require('../lib/mongo.js').User;

module.exports = {
    create(user) {
        return User.create(user).exec();
    },
    getUserByName(name) {
        // 这里我们使用了 addCreatedAt 自定义插件（通过 _id 生成时间戳），
        return User
            .findOne({
                name: name
            })
            .addCreatedAt()
            .exec();
    }
}
