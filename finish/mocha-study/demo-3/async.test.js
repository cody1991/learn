var expect = require('chai').expect,
    request = require('superagent'),
    fetch = require('node-fetch');


// describe('async.test.js - 异步测试', function() {
//     it('异步请求应该返回一个对象', function(done) {
//         request.get('https://api.github.com').end(function(err, res) {
//             console.log(JSON.stringify(res));
//             expect(res).to.be.an('object');
//             done();
//         })
//     });
// });

// $ mocha -t 10000 async.test.js

// 另外，Mocha内置对Promise的支持，允许直接返回Promise，等到它的状态改变，再执行断言，而不用显式调用done方法。请看promise.test.js。


describe('async.test.js - 异步测试', function() {
    it('异步请求应该返回一个对象', function() {
        return fetch('https://api.github.com')
            .then(function(res) {
                return res.json();
            }).then(function(json) {
                console.log(json);
                expect(json).to.be.an('object');
            });
    });
});
