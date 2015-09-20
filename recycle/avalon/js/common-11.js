(function() {
    var model = avalon.define('test', function(vm) {
        vm.firstName = '唐';
        vm.lastName = '这些';
        vm.array = ['aaa', 'bbb', 'ccc'];
        vm.argsClick = function(e, a, b) {
            console.log(e + ' ' + a + ' ' + b);
        }
        vm.loopClick = function(a) {
            console.log(a);
        }
    });
})();
