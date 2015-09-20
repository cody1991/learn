(function() {
    var model = avalon.define('test', function(vm) {
        vm.prop = 'xxx';
        vm.array = ["aaa", "bbb", "ccc", "ddd"];
        vm.data = {
            aaa: 111
        };
        vm.propWatch = '';
        vm.arrayWatch = 4;
        vm.dataWatch = '';
        vm.click = function() {
            model.prop += 'x';
            model.data.aaa += 2;
            model.array.push('k');
        }
    });

    model.$watch('prop', function(a) {
        model.propWatch = a;
    });
    model.array.$watch('length', function(a) {
        model.arrayWatch = a;
    });
    model.data.$watch('aaa', function(a) {
        model.dataWatch = a;
    });

    var props = ['aaa', 'bbb', 'ccc', 'ddd'];
    var backup = props.concat();
    var model2 = avalon.define('test-2', function(vm) {
        vm.aaa = 'aaa';
        vm.bbb = 'bbb';
        vm.ccc = 'ccc';
        vm.ddd = 'ddd';
        vm.propWatch = '';
        vm.click = function() {
            var index = Math.floor(Math.random() * props.length);
            // splice获取的是数组，用[0]来获取字符串
            var prop = props.splice(index, 1)[0];
            if (!props.length) {
                props = backup.concat();
            }
            model2[prop] += '1';
        }
    });

    model2.$watch('$all', function(name) {
        if (name !== 'propWatch') {
            model2.propWatch = name + '属性发生了变化';
        }
    });

    var model3 = avalon.define('test-3', function(vm) {
        vm.phone = '';
    });
    model3.$watch('phone', function(a) {
        var b = a.replace(/\s+/g, '');
        var array = b.split('');
        console.log(b,array)
        var ret = '';
        for (var i = 0, n = array.length; i < n; i++) {
            console.log(i)
            if (i > 10) {
                break;
            }
            if (i == 3) {
                ret += ' ';
            }
            if (i == 7) {
                ret += ' ';
            }
            ret += array[i];
        }
        model3.phone = ret;
    });
})();
