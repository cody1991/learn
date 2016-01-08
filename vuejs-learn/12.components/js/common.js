// var MyComponent = Vue.extend({
//     template: '<div>A custom component!</div>'
// });

// Vue.component('my-component', MyComponent);

Vue.component('my-component',{
    template:'<div>A custom component!</div>'
})

// var Parent = Vue.extend({
//     components: {
//         'my-component': {
//             template: '<div>A custom component!</div>'
//         }
//     }
// })
var vm = new Vue({
    el: '#example'
});
