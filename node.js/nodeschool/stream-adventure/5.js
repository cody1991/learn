var concat = require('concat-stream');

process.stdin.pipe(concat(function(body) {
    // 合并全部
    console.log(body.toString().split('').reverse().join(''));
}));
