var bus = new Vue();
bus.$emit('id-selected', 1);
bus.$on('id-selected', function(id) {

});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        total: 0
    },
    methods: {
        incrementTotal: function() {
            this.total += 1;
        }
    },
    components: {
        'button-counter': {
            template: '<button @click="increment">{{counter}}</button>',
            data: function() {
                return {
                    counter: 0
                }
            },
            methods: {
                increment: function() {
                    this.counter += 1;
                    this.$emit('increment');
                }
            }
        }
    }
});
