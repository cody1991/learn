Vue.filter('reverse', function(value) {
    return value.split('').reverse().join('');
});

Vue.filter('wrap', function(value, begin, end) {
    return begin + ' ' + value + ' ' + end;
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'init'
    }
});
