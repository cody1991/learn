(function() {
    avalon.define('array', function(vm) {
        vm.array = ['1', '2', '3', '4', '5'];

        "push,unshift,remove,ensure".replace(/\w+/g, function(method) {
            vm[method] = function(e) {
                if (this.value && e.which == 13) {
                    vm.array[method](this.value);
                    this.value = '';
                }
            }
        });

        "pop,shift,sort,reverse".replace(/\w+/g, function(method) {
            vm[method] = function(e) {
                vm.array[method]();
            }
        });

        vm.removeAt = function(e) {
            if (isFinite(this.value) && e.which == 13) { //this为input元素
                var a = ~~this.value;
                if (a <= vm.array.size()) {
                    vm.array.removeAt(a);
                }
                this.value = "";
            }
        }

        vm.del = function() {
            vm.array.removeAll();
        }
    });

    avalon.define('collection', function(vm) {
        vm.options = ['name', 'size'];
        vm.trend = 1;
        vm.selected = 'name';
        vm.data = [{
            name: "aaa",
            size: 213,
        }, {
            name: "bbb",
            size: 4576,
        }, {
            name: "ccc",
            size: 563,
        }, {
            name: "eee",
            size: 3713,
        }, {
            name: "555",
            size: 389,
        }];

        vm.$watch('selected', function(v) {
            var t = parseFloat(vm.trend);
            vm.data.sort(function(a, b) {
                var ret = a[v] > b[v] ? 1 : -1;
                return t * ret;
            });
        });

        vm.$watch('trend', function(t) {
            var v = vm.selected;
            var t = parseFloat(t);

            vm.data.sort(function(a, b) {
                var ret = a[v] > b[v] ? 1 : -1;
                return t * ret;
            })
        });
    });

})();
