(function() {
    var model = avalon.define('test', function(vm) {
        vm.aaa = true;
        vm.click = function() {
            vm.aaa = !vm.aaa;
        }
        vm.bbb = '@@@';
        vm.ccc = '&&&';

        vm.background = 'red';

        vm.bb = 1000;
        vm.vv = {
            id: 44
        }

        vm.dataClick = function() {
        	var elem = this;
        	console.log(elem.getAttribute('data-aaa'));
        	console.log(elem.getAttribute('data-bbb-ccc'));
        	console.log(elem.getAttribute('data-eee'));
        	console.log(elem['data-eee']);
        	avalon.log(elem['data-eee']);
        }
    });
})();
