var vm = new Vue({
    el: '#example',
    data: {
        parentMessage: 'Parent',
        items: [{
            message: 'Foo'
        }, {
            message: 'Bar'
        }]
    }
});

// vm.items = vm.items.filter(function(item) {
//     return item.message.match(/Foo/)
// });

// 无效
// vm.items[0] = {
//     message: 'change'
// }

vm.items.$set(0, {
    message: 'change'
});

// 无效
// vm.items.length = 0;
// =>   空数组来取代

// 下面这个方法可以用 this.items.$remove(item) 替代
// var index = this.items.indexOf(item)
// if (index !== -1) {
//   this.items.splice(index, 1)
// }

var vm2 = new Vue({
    el: '#repeat-object',
    data: {
        object: {
            firstName: 'tang',
            lastName: 'zx',
            age: 30
        }
    }
})

var filter = new Vue({
    el: '#filter',
    data: {
        msg: 'aBc',
        money: '123',
        date: [1, 2, 3, 4, 5],
        name: '',
        users: [{
            name: 'Bruce'
        }, {
            name: 'Chuck'
        }, {
            name: 'Jackie'
        },{
            name:'cody'
        }]
    }
})
