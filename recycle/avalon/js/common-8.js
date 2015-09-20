(function() {
    var model = avalon.define('AAA', function(vm) {
        vm.name = 'liger';
        vm.color = 'green';
    });
    var model2 = avalon.define('BBB', function(vm) {
        vm.name = 'sphinx';
        vm.color = 'red';
    });
    var model3 = avalon.define('CCC', function(vm) {
        vm.name = 'dragon';
    });
    var model4 = avalon.define('DDD', function(vm) {
        vm.name = 'sirenia';
    });
})();
