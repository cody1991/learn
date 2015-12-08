var expect = require('chai').expect;


// 另一个例子beforeEach-async.test.js则是演示，如何在beforeEach之中使用异步操作。

describe('异步 beforeEach 示例', function() {
    var foo = false;

    beforeEach(function(done) {
        setTimeout(function() {
            foo = true;
            done();
        }, 50);
    });

    it('全局变量异步修改应该成功', function() {
        expect(foo).to.be.equal(true);
    });
});
