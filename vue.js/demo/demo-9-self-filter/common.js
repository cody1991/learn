(function() {
    Vue.filter('reverse', function(value) {
        return value.split('').reverse().join('');
    });

    Vue.filter('wrap', function(value, begin, end) {
        return begin + ' ' + value + ' ' + end;
    });

    // Vue.filter('currencyDisplay', {
    //     currencyDisplay: {
    //         // model -> view
    //         // formats the value when updating the input element.
    //         read: function(val) {
    //             return '$' + val.toFixed(2)
    //         },
    //         // view -> model
    //         // formats the value when updating the data.
    //         write: function(val, oldVal) {
    //             var number = +val.replace(/[^\d.]/g, '')
    //             return isNaN(number) ? 0 : number
    //         }
    //     }
    // });

    var vm = new Vue({
        el: '#demo',
        data: {
            message: 'abc',
            two: 0
        }
    });
})();
