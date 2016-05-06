var app = new Vue({
    el: '#app',
    data: {
        parentMessage: 'Parent',
        items: [{
            message: 'foo'
        }, {
            message: 'bar'
        }],
        items2: [{
            _uid: '1'
        }, {
            _uid: '2'
        }]
    }
});


setTimeout(function() {
    app.items.push({
        message: 'push'
    })
}, 1000);

setTimeout(function() {
    app.items.pop();
}, 2000);

setTimeout(function() {
    app.items.shift();
}, 3000);

setTimeout(function() {
    app.items.unshift({
        message: 'unshift'
    })
}, 4000);

setTimeout(function() {
    app.items.splice(0, 1);
}, 5000);

setTimeout(function() {
    app.items.unshift({
        message: 'unshift-2'
    })
}, 6000);

setTimeout(function() {
    app.items.unshift({
        message: 'unshift-3'
    })
}, 7000);

setTimeout(function() {
    app.items.sort();
}, 8000);

setTimeout(function() {
    app.items.reverse();
}, 9000);

setTimeout(function() {
    app.items = app.items.filter(function(item) {
        return item.message.match(/unshift-3/);
    });
}, 10000);
// 语法
// arrayObject.splice(index,howmany,item1,.....,itemX)
// 参数	描述
// index	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
// howmany	必需。要删除的项目数量。如果设置为 0，则不会删除项目。
// item1, ..., itemX	可选。向数组添加的新项目。


// 变异方法，如名字所示，修改了原始数组。相比之下，也有非变异方法，如 filter(), concat() 和 slice()，不会修改原始数组而是返回一个新数组。在使用非变异方法时，可以直接用新数组替换旧数组：

// example1.items = example1.items.filter(function (item) {
//   return item.message.match(/Foo/)
// })

// ----------------------------

// 因为 JavaScript 的限制，Vue.js 不能检测到下面数组变化：

// 直接用索引设置元素，如 vm.items[0] = {}；
// 修改数据的长度，如 vm.items.length = 0。
// 为了解决问题 (1)，Vue.js 扩展了观察数组，为它添加了一个 $set() 方法：

app.items2.$set(2, {
    _uid: 3
});

// 至于问题 (2)，只需用一个空数组替换 items。

// 除了 $set()， Vue.js 也为观察数组添加了 $remove() 方法，用于从目标数组中查找并删除元素，在内部它调用 splice() 。因此，不必这样：
