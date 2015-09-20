(function() {
    var demo = new Vue({
        el: '#demo',
        data: {
            parentMsg: 'hello',
            items: [{
                childMsg: 'Angular'
            }, {
                childMsg: 'backbone'
            }, {
                childMsg: 'vue'
            }],
            list: [{
                msg: '123'
            }, {
                msg: '321'
            }],
            tags: ['Javascript', 'MVVM', 'Vue.js'],
            count: 10,
            string: 'javascript',
            primitiveValues: {
                FirstName: 'John',
                LastName: 'Doe',
                Age: 30
            },
            objectValues: {
                one: {
                    msg: 'Hello'
                },
                two: {
                    msg: 'Bye'
                }
            }
        }
    });

    setTimeout(function() {
        demo.items.unshift({
            childMsg: 'Baz'
        });
    }, 1000);

    setTimeout(function() {
        demo.items.$remove(0);
        demo.items.$set(0, {
            childMsg: 'Changed!'
        });
    }, 2000);

    setTimeout(function() {
        demo.items = demo.items.filter(function(item) {
            return item.childMsg.match(/backbone/);
        })
    }, 3000);
})();
