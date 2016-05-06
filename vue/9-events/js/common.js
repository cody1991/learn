var app = new Vue({
    el: '#app',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function(event) {
            console.log('Hello ' + this.name + '!');

            console.log(event.target.tagName);
        },
        say: function(msg, event) {
            console.log(msg);

            event.preventDefault();
        },
        doThis: function() {

        },
        doSubmit: function() {
			console.log('submit');

        }
    }
});
