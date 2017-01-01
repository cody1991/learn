Vue.filter('reverse', function(value) {
    return value.split('').reverse().join('');
});

Vue.filter('wrap', function(value, begin, end) {
    return begin + ' ' + value + ' ' + end;
});

Vue.filter('currencyDisplay', {
    read: function(val) {
        return '$' + val.toFixed(2);
    },
    write: function(val, oldVal) {
        var number = +val.replace(/[^\d.]/g, '');
        return isNaN(number) ? 0 : parseFloat(number.toFixed(2));
    }
});

var vm = new Vue({
    el: '#example',
    data: {
        message: 'abc',
        money: 0
    }
});
