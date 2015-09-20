(function() {

    var mode3 = avalon.define('test-3', function(vm) {
        vm.arr = ["a", "b", "c", "d", "e", "f", "g", "h"]

    })

    var model = avalon.define('test', function(vm) {
        vm.array = ['1', '2', '3', '4'];

    });

    setTimeout(function() {
        model.array.set(0, 7);
    }, 1000);

    var model2 = avalon.define('test-2', function(vm) {
        vm.array = [{
            name: "xxx",
            sex: "aaa",
            c: {
                number: 2
            }
        }, {
            name: "yyy",
            sex: "bbb",
            c: {
                number: 4
            }
        }]
    });

    setTimeout(function() {
        model2.array[0].c.number = 9;
        model2.array[0].name = '1000';
    }, 1000);

    setTimeout(function() {
        model.array.push(5, 6, 7, 8, 9);
    }, 1000);

    setTimeout(function() {
        model.array.unshift('a', 'b', 'c', 'd');
    }, 2000);

    setTimeout(function() {
        model.array.shift();
        model2.array[1].name = 7;
    }, 3000);

    setTimeout(function() {
        model.array.pop();
    }, 4000);

    setTimeout(function() {
        model.array.splice(1, 3, "x", "y", "z");
        model2.array[1].name = '5000';
    }, 5000);


})();
