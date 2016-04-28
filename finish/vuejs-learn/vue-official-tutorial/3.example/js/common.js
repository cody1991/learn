var data = {
    a: 1
}

var vm = new Vue({
    data: data,
    el: '#example',
    created: function() {
        // 'this' 指向 vm 实例
        console.log('a is:' + this.a)
    }
});

console.log(vm.a === data.a);

vm.a = 2;
console.log(data.a);

console.log(vm.$data);
console.log(vm.$data === data);

console.log(vm.$el === document.getElementById('example'));

vm.$watch('a', function(newVal, oldVal) {
    // vm.a 改变以后调用
});
