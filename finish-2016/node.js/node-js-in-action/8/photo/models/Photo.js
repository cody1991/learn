var mongoose = require('mongoose');

// 连接photo_app数据库
mongoose.connect('mongodb://localhost/photo_app');

var schema = new mongoose.Schema({
    name: String,
    path: String
});

// mongoose模型上有所有的crud方法，Photo.create Photo.update Photo.remove Photo.find

module.exports = mongoose.model('Photo', schema);