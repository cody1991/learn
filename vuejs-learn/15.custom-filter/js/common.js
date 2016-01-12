Vue.filter('reverse', function(value) {
    return value.split('').reverse().join('');
});

var vm = new Vue({
    el: '#example',
    data: {
        message: 'abc'
    }
})
