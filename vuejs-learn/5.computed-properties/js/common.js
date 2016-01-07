var vm = new Vue({
    el: '#example',
    data: {
        a: 1,
        firstName: 'tang',
        lastName: 'zx'
    },
    computed: {
        b: function() {
            return this.a + 1
        },
        // fullName: function() {
        //     return this.firstName + ' ' + this.lastName;
        // }
        fullName: {
            get: function() {
                return this.firstName + ' ' + this.lastName;
            },
            set: function(newValue) {
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
            }
        }
    }
});

// vm.$watch('firstName', function(val) {
//     this.fullName = val + ' ' + this.lastName;
// });

// vm.$watch('lastName', function(val) {
//     this.fullName = this.firstName + ' ' + val;
// });


vm.a = 2;
