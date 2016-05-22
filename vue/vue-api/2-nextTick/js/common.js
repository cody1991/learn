var example = Vue.component('example', {
    template: '<span @click="updateMessage">{{msg}}</span>',
    data: function() {
        return {
            msg: 'not updated'
        }
    },
    methods: {
        updateMessage: function() {
            this.msg = 'updated';

            console.log(this.$el.textContent);

            this.$nextTick(function() {
                console.log(this.$el.textContent);
            });
        }
    }
});



var app = new Vue({
    el: 'body'
});
