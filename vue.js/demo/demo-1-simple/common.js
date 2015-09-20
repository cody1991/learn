(function() {
    var demo = new Vue({
        el: '#demo',
        data: {
            title: 'todos',
            todos: [{
                done: true,
                content: 'Learn Javascript'
            }, {
                done: false,
                content: 'Learn Vue.js'
            }]
        }
    })
})();
