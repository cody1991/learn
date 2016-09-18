var events = require('events'),
    util = require('util'),
    fs = require('fs');

var watchDir = './watch',
    processedDir = './done';

function Watcher(watchDir, processedDir) {
    this.watchDir = watchDir;
    this.processedDir = processedDir;
}

// node的内置模块 utils.inherits函数继承
// 相当于 Watcher.prototype = new events.EventEmitter();

util.inherits(Watcher, events.EventEmitter);

Watcher.prototype.watch = function() {
    var watcher = this;

    fs.readdir(this.watchDir, function(err, files) {
        if (err) {
            throw err;
        }
        for (var index in files) {
            watcher.emit('process', files[index]);
        }
    });
}

// 开始监听
Watcher.prototype.start = function() {
    var watcher = this;

    // fs.watchFile 监控目录，发生事情的时候会启动
    fs.watchFile(watchDir, function() {
        watcher.watch();
    });
}

var watcher = new Watcher(watchDir, processedDir);

watcher.on('process', function process(file) {
    var watchFile = this.watchDir + '/' + file;
    console.log(watchFile);

    var processedFile = this.processedDir + '/' + file.toLowerCase();

    fs.rename(watchFile, processedFile, function(err) {
        if (err) {
            throw err;
        }
    })
});

watcher.start();
