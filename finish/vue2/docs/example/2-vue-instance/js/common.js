// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue.js'
//     }
// });


var myComponent = Vue.extend({

});

var myComponentInstance = new myComponent();


var data = {
    a: 1
}
var vm = new Vue({
    el: '#app',
    data: data,
    created: function() {
        console.log('a is ' + this.a);
    }
});
vm.$data === data;
vm.$el === document.getElementById('app');

vm.$watch('a', function(newVal, oldVal) {
    console.log(newVal, oldVal);
});
