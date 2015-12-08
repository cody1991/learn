var expect = require('chai').expect;

describe('timeout.test.js - 超时测试', function() {
    it('测试应该500毫秒后结束', function(done) {
        var x = true;
        var f = function() {
            x = false;
            expect(x).to.be.not.ok;
            // 通知Mocha测试结束
            // done();
        }
        setTimeout(f, 4000);
    });
});

// mocha -t 5000 timeout.test.js
// 上面命令将测试的超时时限指定为5000毫秒
// 另外，上面的测试用例里面，有一个done函数。it块执行的时候，传入一个done参数，当测试结束的时候，必须显式调用这个函数，告诉Mocha测试结束了。否则，Mocha就无法知道，测试是否结束，会一直等到超时报错。你可以把这行删除试试看。
// Mocha默认会高亮显示超过75毫秒的测试用例，可以用-s或--slow调整这个参数。