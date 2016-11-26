// 一个对象，键是观察表达式，值是对应回调。值也可以是方法名，或者是对象，包含选项。在实例化时为每个键调用 $watch() 。

var vm = new Vue({
    data: {
        a: 1
    },
    watch: {
        'a': function(val, oldVal) {
            console.log('new: %s, old: %s', val, oldVal);
        },
        // 方法名
        'b': 'someMethod',
        // 深度watcher
        'c': {
            handler: function(val, oldVal) {},
            deep: true
        }
    }
});

vm.a = 2
