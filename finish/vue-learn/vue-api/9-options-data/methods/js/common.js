var vm = new Vue({
    data: {
        a: 1
    },
    methods: {
        plus: function() {
            this.a++;
        }
    }
});

vm.plus();

vm.a // 2;
