var app = new Vue({
    el: '#app',
    data: {
        a: 1,
        firstName: 'Hello',
        lastName: 'Vue',
    },
    computed: {
        b: function() {
            return this.a + 1;
        },
        // fullName: function() {
        //     // 计算属性默认只是 getter
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

// 现在在调用 vm.fullName = 'John Doe' 时，setter 会被调用，vm.firstName 和 vm.lastName 也会有相应更新。

// app.$watch('firstName', function(val) {
//     this.fullName = val + ' ' + this.lastName;
// });

// app.$watch('lastName', function(val) {
//     this.fullName = this.firstName + ' ' + this.val;
// });

// 上面代码是命令式的重复的。
