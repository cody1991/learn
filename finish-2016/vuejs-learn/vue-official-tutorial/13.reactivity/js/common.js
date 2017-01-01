var vm = new Vue({
    el: '#example',
    data: {
        msg: 'hi,'
    },
    computed: {
        cache: false,
        example: function() {
            return Date.now() + this.msg;
        }
    }
})
