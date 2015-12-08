Mocha在describe块之中，提供测试用例的四个钩子：before()、after()、beforeEach()和afterEach()。它们会在指定时间执行。

    describe('hooks', function() {

      before(function() {
        // 在本区块的所有测试用例之前执行
      });

      after(function() {
        // 在本区块的所有测试用例之后执行
      });

      beforeEach(function() {
        // 在本区块的每个测试用例之前执行
      });

      afterEach(function() {
        // 在本区块的每个测试用例之后执行
      });

      // test cases
    });