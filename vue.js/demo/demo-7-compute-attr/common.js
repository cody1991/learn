(function() {
    var vm = new Vue({
        el: '#demo',
        data: {
            firstName: 'Foo',
            lastName: 'Bar',
            fullName: 'Foo Bar',
            msg: 'hi',
        },
        computed: {
            fullName: {
                get: function() {
                    return this.firstName + ' ' + this.lastName;
                },
                set: function(newValue) {
                    var names = newValue.split(' ');
                    this.firstName = names[0];
                    this.lastName = names[names.length - 1];
                }
            },
        }
    });

    // 比较笨重，可以使用上面的computed
    // vm.$watch('firstName', function(val) {
    //     this.fullName = val + ' ' + this.lastName;
    // });
    // vm.$watch('lastName', function(val) {
    //     this.fullName = this.firstName + ' ' + val;
    // });
})();
