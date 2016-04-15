var fs = require('fs');

var src = './bg1.jpg',
    dst = './temp1.jpg';


var rs = fs.createReadStream(src),
    ws = fs.createWriteStream(dst);

var count = 0;

rs.on('data', function(chunk) {
    count++;
    console.log(chunk);

    if (ws.write(chunk) === false) {
        rs.pause();
    }

    // ws.write(chunk);
    // 但是以上代码存在上边提到的问题，如果写入速度跟不上读取速度的话，只写数据流内部的缓存会爆仓。我们可以根据.write方法的返回值来判断传入的数据是写入目标了，还是临时放在了缓存了，并根据drain事件来判断什么时候只写数据流已经将缓存中的数据写入目标，可以传入下一个待写数据了。因此代码可以改造如下：
});

rs.on('end', function() {
    console.log('end');
    console.log(count);
});

ws.on('drain', function() {
    rs.resume();
});

// 以上代码实现了数据从只读数据流到只写数据流的搬运，并包括了防爆仓控制。因为这种使用场景很多，例如上边的大文件拷贝程序，NodeJS直接提供了.pipe方法来做这件事情，其内部实现方式与上边的代码类似。