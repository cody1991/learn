var MyComponent = Vue.extend({

});

var myComponentInstance = new MyComponent();

console.log(myComponentInstance);

var data = {
    a: 1
}

var vm = new Vue({
    el: '#example',
    data: data,
    created: function() {
        console.log('a is: ' + this.a)
    }
});

vm.$watch('a', function(newVal, oldVal) {
    console.log(newVal, oldVal);
});

console.log(vm.a === data.a);
vm.a = 2;
console.log(data.a);
data.a = 3;
console.log(data.a);

console.log(vm.$data === data);
console.log(vm.$el === document.getElementById('example'));
