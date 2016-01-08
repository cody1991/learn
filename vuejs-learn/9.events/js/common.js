var vm = new Vue({
    el: '#example',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function(event) {
            console.log('Hello ' + this.name + '!');
            console.log(event.target.tagName);
        }
    }
});


// vm.greet();
