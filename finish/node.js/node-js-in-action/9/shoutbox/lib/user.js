// 用户模型
var redis = require('redis'),
    bcrypt = require('bcrypt'),
    db = redis.createClient();

module.exports = User;

function User(obj) {
    for (var key in obj) {
        this[key] = obj[key];
    }
}

User.prototype.save = function(fn) {
    // fn 是什么
    if (this.id) {
        // 存在的id，就更新
        this.update(fn);
    } else {
        var user = this;
        // 创建唯一的id
        db.incr('user:ids', function(err, id) {
            if (err) {
                return fn(err);
            }
            user.id = id;
            // 密码哈希
            user.hashPassword(function(err) {
                if (err) {
                    return fn(err);
                }
                // 更改密码以后
                // 保存更新的用户属性
                user.update(fn);
            });
        });
    }
}

User.prototype.hashPassword = function(fn) {
    var user = this;
    // 生成12个字符的盐
    bcrypt.genSalt(12, function(err, salt) {
        if (err) {
            return fn(err);
        }
        // 保存盐
        user.salt = salt;
        // 生成哈希
        bcrypt.hash(user.pass, salt, function(err, hash) {
            if (err) {
                return fn(err);
            }
            // 保存哈希值
            user.pass = hash;
            fn();
        });
    });
}

User.prototype.update = function(fn) {
    var user = this;
    var id = user.id;

    // 用名称索引用户id
    db.set('user:id:' + user.name, id, function(err) {
        if (err) {
            return fn(err);
        }
        // 用Redis哈希存储数据
        db.hmset('user:' + id, user, function(err) {
            fn(err);
        });
    });
}

User.getByName = function(name, fn) {
    User.getId(name, function(err, id) {
        if (err) {
            return fn(err);
        }
        User.get(id, fn);
    });
}

User.getId = function(name, fn) {
    db.get('user:id:' + name, fn);
}

User.get = function(id, fn) {
    db.hgetall('user:' + id, function(err, user) {
        if (err) {
            return fn(err);
        }
        fn(null, new User(user));
    });
}

User.authenticate = function(name, pass, fn) {
    User.getByName(name, function(err, user) {
        if (err) {
            return fn(err);
        }
        if (!user.id) {
            return fn();
        }
        bcrypt.hash(pass, user.salt, function(err, hash) {
            if (err) {
                return fn(err);
            }
            if (hash == user.pass) {
                return fn(null, user);
            }
            fn();
        });
    })
}
