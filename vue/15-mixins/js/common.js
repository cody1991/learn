var myMixin = {
    created: function() {
        this.hello();
    },
    methods: {
        hello: function() {
            console.log('hello from mixin!');
        }
    }
};

var Component = Vue.extend({
    mixins: [myMixin]
});

var component = new Component();

var mixin = {
    created: function() {
        console.log('mixin hook called');
    }
};

new Vue({
    mixins: [mixin],
    created: function() {
        console.log('component hook called');
    }
});
// 当混合对象与组件包含同名选项时，这些选项将以适当的策略合并。例如，同名钩子函数被并入一个数组，因而都会被调用。另外，混合的钩子将在组件自己的钩子之前调用。

var mixin2 = {
    methods: {
        foo: function() {
            console.log('foo');
        },
        conflicting: function() {
            console.log('from mixin');
        }
    }
};

var vm = new Vue({
    mixins: [mixin2],
    methods: {
        bar: function() {
            console.log('bar')
        },
        conflicting: function() {
            console.log('from self');
        }
    }
});

vm.foo();
vm.bar();
vm.conflicting();
