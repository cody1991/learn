// 实例计算属性。getter 和 setter 的 this 自动地绑定到实例。

var vm = new Vue({
    data: {
        a: 1
    },
    computed: {
        aDboule: function() {
            return this.a * 2;
        }
        aPlus: {
            get: function() {
                return this.a + 1;
            },
            set: function(v) {
                this.a = v - 1;
            }
        }
    }
});

vm.aPlus // 2
vm.aPlus = 3;

vm.a // 2
vm.aDboule // 4
