var demo1 = new Vue({
    el: '#demo1',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function(event) {
            console.log('Hello ' + this.name + '');
            console.log(event.target.tagName);
            console.log(event.target);
        },
        keyupEvent: function(event) {
            console.log('keyup enter!');
        }
    }
})
