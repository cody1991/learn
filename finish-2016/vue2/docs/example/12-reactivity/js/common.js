Vue.config.devtools = true

var data = {
    a: 1,
    message: 'Hello Vue.js'
}

var app = new Vue({
    el: '#app',
    data: data
});

// vm.b = 2
// `vm.b` is NOT reactive

// data.b = 2
// `data.b` is NOT reactive

// Vue.set(data, 'c', 3);
