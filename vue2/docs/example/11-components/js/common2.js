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
        },
        'my-input': {
            template: '\
                <div class="form-group">\
                  <label v-bind:for="randomId">{{ label }}:</label>\
                  <input v-bind:id="randomId" v-on:input="onInput">\
                </div>\
              ',
            props: ['value', 'label'],
            data: function() {
                return {
                    randomId: 'input-' + Math.random()
                }
            },
            methods: {
                onInput: function(event) {
                    console.log(event.target);
                    this.$emit('input', event.target.value);
                }
            }
        }
    }
});
