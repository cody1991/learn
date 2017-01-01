var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        todos: [{
            text: 'learn javascript'
        }, {
            text: 'learn vue'
        }, {
            text: 'build something awesome'
        }]
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
});


var app2 = new Vue({
    el: '#app2',
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
                this.todos.push({
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
