var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        todos: [{
            text: 'Learn Javascript'
        }, {
            text: 'Learn Vue.js'
        }, {
            text: 'Build Something Awesome'
        }],
        todoLists: [{
            text: 'Add some todoLists'
        }]
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        },
        addTodo: function() {
            var text = this.newTodo.trim();
            if (text) {
                this.todoLists.push({
                    text: text
                });
            }
            this.newTodo = '';
        },
        removeTodo: function(index) {
            this.todoLists.splice(index, 1);
        }
    }
});
