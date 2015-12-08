// 大型项目有很多测试用例。有时，我们希望只运行其中的几个，这时可以用only方法。describe块和it块都允许调用only方法，表示只运行某个测试套件或测试用例

var expect = require('chai').expect,
    add = require('./add.js');

describe('only 测试', function() {

    // 上面代码中，只有带有only方法的测试用例会运行。
    // 此外，还有skip方法，表示跳过指定的测试套件或测试用例。 it.skip
    it.only('1 加 1 应该等于2', function() {
        expect(add(1, 1)).to.be.equal(2);
    })

    it('任何数字加0都应该等于自身', function() {
        expect(add(1, 0)).to.be.equal(1);
    });
});
