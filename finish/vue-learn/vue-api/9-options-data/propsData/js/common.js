// 在创建实例的过程传递 props。主要作用是方便测试。

var Comp = Vue.extend({
    props: ['msg'],
    template: '<div>{{msg}}</div>'
});

var vm = new Comp({
    propsData: {
        msg: 'hello'
    }
});
