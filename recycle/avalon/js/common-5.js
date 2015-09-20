(function() {
    avalon.define('test', function(vm) {
        vm.aaa = '111';
        vm.$watch('aaa', function(v) {
            avalon.log(v);
            avalon.log('ancestor.aaa事件被触发');
        });
        vm.click = function() {
            avalon.log('向下广播');
            vm.$fire('down!aaa', 'capture');
        };
    });

    avalon.define('parent', function(vm) {
        vm.text = '222';
        vm.aaa = '333';
        vm.$watch('aaa', function(v) {
            avalon.log(v);
            avalon.log('parent.aaa事件被触发');
        });
        vm.click = function() {
            avalon.log('全局扩播');
            vm.$fire('all!aaa', 'broadcast');
        }
    });

    avalon.define('son', function(vm) {
        vm.$watch('aaa', function(v) {
            avalon.log(v);
            avalon.log('son.aaa事件被触发');
        });
        vm.click = function() {
            avalon.log('向上冒泡');
            vm.$fire('up!aaa', 'bubble');
        }
    })
})();
