(function() {
    var model = avalon.define('test', function(vm) {
        vm.arr = ['1', '2', '3', '4'];
        vm.selected = ["2", "3"];

        vm.checkAllbool = vm.arr.length === vm.selected.length;

        vm.clickAll = function() {
            console.log(this.checked);
            if (this.checked) {
                vm.selected = vm.arr;
            } else {
                vm.selected.clear();
            }
        }

        vm.username = "cody1991";
        vm.changeCallback = function(val) {
            avalon.log(val);
            avalon.log(this);
        }
    });

    model.selected.$watch('length', function(n) {
        model.checkAllbool = n === model.arr.size();
    })
})();
