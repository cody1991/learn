var data = {
    a: 1
}
var vm = new Vue({
    el: '#example',
    data: data
});

vm.$watch('a', function(newVal, oldVal) {
    console.log(newVal, oldVal);
});

console.log(vm.a === data.a);
vm.a = 2
console.log(data.a);
data.a = 3;
console.log(vm.a);

console.log(vm.$data === data);
console.log(vm.$el === document.getElementById('example'));


var vm2 = new Vue({
    el: "#example-2",
    data: {
        a: 1
    },
    // 也有一些其它的钩子，在实例生命周期的不同阶段调用，如 compiled、 ready 、destroyed。钩子的 this 指向调用它的 Vue 实例。一些用户可能会问 Vue.js 是否有“控制器”的概念？答案是，没有。组件的自定义逻辑可以分割在这些钩子中。
    created: function() {
        console.log('a is : ' + this.a);
    }
});
