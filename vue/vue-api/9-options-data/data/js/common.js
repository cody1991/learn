var data = {
    a: 1
}

var vm = new Vue({
    data: data
});

vm.a;
vm.$data === data;

var Component = Vue.extend({
    data: function() {
        return {
            a: 1
        }
    }
})
