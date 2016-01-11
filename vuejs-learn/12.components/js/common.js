// var MyComponent = Vue.extend({
//     template: '<div>A custom component!</div>'
// });

// Vue.component('my-component', MyComponent);

Vue.component('my-component', {
    template: '<div>{{msg}}</div>',
    props: ['msg']
})

// var Parent = Vue.extend({
//     components: {
//         'my-component': {
//             template: '<div>A custom component!</div>'
//         }
//     }
// })
var vm = new Vue({
    el: '#example',
    data: {
        parentMsg: ''
    }
});


Vue.component('child', {
    template: '#child-template',
    data: function() {
        return {
            msg: 'hello'
        }
    },
    methods: {
        notify: function() {
            if (this.msg.trim()) {
                this.$dispatch('child-msg', this.msg)
                this.msg = ''
            }
        }
    }
})

var parent = new Vue({
    el: '#events-example',
    data: {
        messages: []
    },
    events: {
        'child-msg': function(msg) {
            this.messages.push(msg)
        }
    }
})
