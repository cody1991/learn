var app = new Vue({
    el: '#app',
    data: {
        input: '# hello'
    },
    filters: {
        marked: marked
    }
})
