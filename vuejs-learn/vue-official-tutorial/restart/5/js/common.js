var demo1 = new Vue({
    el: '#demo1',
    data: {
        a: 1,
        firstName: 'foo',
        lastName: 'Bar'
    },
    computed: {
        b: function() {
            return Number(this.a) + 1;
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
})


// computed一般只有 getter ，不过也有可能需要 setter
