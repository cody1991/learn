var mongoose = require('mongoose');

// 连接到mongodb tasks数据库
var db = mongoose.connect('mongodb://localhost/tasks');

// mongoose.disconnect() 关闭

// 管理数据到时候需要注册schema

var Schema = mongoose.Schema;
var Tasks = new Schema({
    project: String,
    description: String
});
mongoose.model('Task', Tasks);

var Task = mongoose.model('Task');

var task = new Task();

task.project = 'Bikeshed';
task.description = 'Paint the bikeshed red.';

// task.save(function(err) {
//     if (err) {
//         throw err;
//     }
//     console.log('Task saved.');
// })


Task.update({
    _id: '57df66f1a68af3035f0edb34'
}, {
    description: 'Paint the bikeshed green'
}, {
    // 只更新一个文档
    multi: false
}, function(err, rows_updates) {
    if (err) {
        throw err;
    }
    console.log('Updated.');
});

Task.findById('57df66f1a68af3035f0edb34', function(err, task) {
    task.remove();
});

Task.find({
    'project': 'Bikeshed'
}, function(err, tasks) {
    for (var i = 0; i < tasks.length; i++) {
        console.log('ID:' + tasks[i]._id);
        console.log(tasks[i].description);
    }
});