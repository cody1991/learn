// 组件构造器
// var MyComponent = Vue.extend({
//     template: '<div>A custom component!</div>'
// });

// Vue.component('my-component', MyComponent);

var MyComponent = Vue.component('my-component', {
    props: ['myMessage'],
    template: '<div>{{myMessage}}</div>',
    data: function() {
        return {
            a: 1
        }
    }
});

var demo1 = new Vue({
    el: '#demo1',
    data: {
        msgVal: ''
    }
});
