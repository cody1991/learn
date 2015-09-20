(function() {
    var demo = new Vue({
        el: '#demo',
        data: {
            n: 0,
            items: [{
                text: 'one',
                done: true
            }, {
                text: 'two',
                done: false
            }]
        },
        methods: {
            onClickOne: function(e) {
                console.log(e.target.tagName);
                console.log(this);
                console.log(e.targetVM)
                console.log(e.targetVM === this);
            },
            toggle: function(item) {
                item.done = !item.done;
            },
            submit: function(msg, e) {
                console.log(msg);
                e.stopPropagation();
            },
            submitTwo: function(e) {
                console.log(e)
            }
        }
    })
})();
