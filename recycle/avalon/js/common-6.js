(function() {
    var model = avalon.define('test', function(vm) {
        vm.$aaa = 'sss';
        vm.$skipArray = ['bbb', 'ccc'];

        vm.aaa = 111;
        vm.bbb = 222;
        vm.ccc = 333;
        vm.fn = function() {
            return '函数';
        }
        vm.click = function() {
            vm.$aaa = vm.aaa = vm.bbb = vm.ccc = 'change!';
            vm.fn = function() {
                return '---';
            }
        }
    });
})();
