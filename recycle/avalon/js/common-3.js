(function() {
    avalon.define('test', function(vm) {
        vm.firstName = '泽雄';
        vm.lastName = '唐';
        vm.fullName = {
            // 包含set和get方法
            set: function(val) {
                // 里面必须用this指向vm而不能用vm
                var array = (val || "").split(" ");
                this.firstName = array[0] || '';
                this.lastName = array[1] || '';
            },
            get: function() {
                return this.firstName + ' ' + this.lastName;
            }
        }
    })
})();
