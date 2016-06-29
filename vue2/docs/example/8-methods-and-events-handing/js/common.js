var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        counter: 0,
        name: 'Vue.js'
    },
    methods: {
        greet: function(name, event) {
            if (event) {
                event.preventDefault();
            }
            console.log(event.target.tagName);
            console.log('Hello ' + name + '!');
        }
    }
});
