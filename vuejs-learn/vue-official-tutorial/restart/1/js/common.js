var demo1 = new Vue({
    el: '#demo1',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
});


var demo2 = new Vue({
    el: '#demo2',
    data: {
        todos: [{
            text: 'Learn Javascript'
        }, {
            text: 'Learn Vue.js'
        }, {
            text: 'Build Something Awesome'
        }]
    }
});


var demo3 = new Vue({
    el: '#demo3',
    data: {
        newTodo: '',
        todos: [{
            text: 'Add some todos'
        }]
    },
    methods: {
        addTodo: function() {
            var text = this.newTodo.trim();
            if (text) {
                this.todos.unshift({
                    text: text
                });
                this.newTodo = '';
            }
        },
        removeTodo: function(index) {
            this.todos.splice(index, 1);
        }
    }
})
