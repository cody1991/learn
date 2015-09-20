(function() {
    var model = avalon.define('test', function(vm) {
        vm.toggle = true;
        vm.click = function() {
            vm.toggle = !vm.toggle;
        }

        vm.w = 500;
        vm.h = 200;
        vm.num = "00";

        vm.changeClassName = function() {
            vm.num = (100 * Math.random()).toFixed(0);
        }
    });
    var model2 = avalon.define('test-2', function(vm) {
        vm.color = 'red';
        vm.toggle = true;

        vm.changeTogle = function() {
            vm.toggle = !vm.toggle;
        }
        vm.switchColor = function() {
            vm.color = vm.color === 'red' ? 'blue' : 'red';
        }
    });

    var model3 = avalon.define('test-3', function(vm) {
        vm.array = avalon.range(0, 14);
    })
})();
