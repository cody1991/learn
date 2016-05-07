var myComponent = Vue.extend({
    template: '<div>A custom component!</div>'
});

Vue.component('my-component', myComponent);

var app = new Vue({
    el: '#app'
});
