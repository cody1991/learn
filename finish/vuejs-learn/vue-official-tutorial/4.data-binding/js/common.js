var vm = new Vue({
    el: '#example',
    data: {
        msg: 'hello vue.js',
        isDisabled: true
    },
    methods: {
        doSomething: function() {
            console.log(vm.$data);
        }
    }
})
