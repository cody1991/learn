(function() {
    // avalon.define({
    //     $id: 'test',
    //     string: '我是字符串',
    //     bool: true,
    //     number: 100,
    //     object: {
    //         '小李': '20岁',
    //         '小名': '30岁'
    //     }
    // });
    avalon.define('test', function(vm) {
        vm.string = '我是字符串';
        vm.bool = true;
        vm.number = 100;
        vm.object = {
            '小李': '20岁',
            '小名': '30岁'
        }
    })
})();
