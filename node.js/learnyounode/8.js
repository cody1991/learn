var http = require('http');

var urls = [],
    urlsLen,
    result = [],
    resultLen = 0;

for (var i = 2; i < process.argv.length; i++) {
    urls.push(process.argv[i]);
}

urlsLen = urls.length;

for (var i = 0; i < urlsLen; i++) {

    httpGet(i)
        // (function(m) {
        //     http.get(urls[m], function(res) {
        //         var curResult = '';
        //         res.setEncoding('utf-8');
        //         res.on('data', function(data) {
        //             curResult += data;
        //         });
        //         res.on('end', function() {
        //             resultLen++;
        //             result[m] = curResult;

    //             if (resultLen == urlsLen) {
    //                 for (var i = 0; i < resultLen; i++) {
    //                     console.log(result[i]);
    //                 }
    //             }
    //         });
    //     });
    // })(i)
}

function httpGet(m) {
    http.get(urls[m], function(res) {
        var curResult = '';
        res.setEncoding('utf-8');
        res.on('data', function(data) {
            curResult += data;
        });
        res.on('end', function() {
            resultLen++;
            result[m] = curResult;

            if (resultLen == urlsLen) {
                for (var i = 0; i < resultLen; i++) {
                    console.log(result[i]);
                }
            }
        });
    });
}

// 不要期待这三台服务器能好好的一起玩耍！他们可能不会把完整的响应的结果按照你
//   希望的顺序返回给你，所以你不能天真地只是在收到响应后直接打印出来，因为这样
//   做的话，他们的顺序可能会乱掉。

//   你需要去跟踪到底有多少 URL
//   完整地返回了他们的内容，然后用一个队列存储起来。一旦你拥有了所有的结果，你
//   才可以把它们打印到终端。

//   对回调进行计数是处理 Node
//   中的异步的基础。比起你自己去做，你会发现去依赖一个第三方的模块或者库会更方
//   便，比如 [async](http://npm.im/async) 或者
//   [after](http://npm.im/after)。不过，在本次练习中，你应该尝试自己去解决，而
//   不是依赖外部的模块。

// var http = require('http'),
//     bl = require('bl');

// var results = [],
//     count = 0;

// function printResult() {
//     for (var i = 0; i < 3; i++) {
//         console.log(results[i]);
//     }
// }

// function httpGet(index) {
//     http.get(process.argv[2 + index], function(res) {
//         res.pipe(bl(function(err, data) {
//             if (err) {
//                 return console.error(err);
//             }
//             results[index] = data.toString();
//             count++;
//             if (count == 3) {
//                 printResult();
//             }
//         }))
//     })
// }

// for (var i = 0; i < 3; i++) {
//     httpGet(i);
// }
