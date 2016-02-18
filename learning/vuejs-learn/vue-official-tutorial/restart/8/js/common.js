var demo1 = new Vue({
    el: '#demo1',
    data: {
        items: [{
            message: 'Foo',
        }, {
            message: 'Bar'
        }],
        object: {
            firstName: 'john',
            lastName: 'doe',
            age: 30
        }
    }
});

// var index = this.items.indexOf(item)
// if (index !== -1) {
//   this.items.splice(index, 1)
// }

// this.items.$remove(item);

// example1.items.$set(0,{});
