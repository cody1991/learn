Vue.directive('my-directive', {
    bind: function() {

    },
    update: function() {

    },
    unbind: function() {

    }
});

Vue.directive('my-directive', function() {
    // this will be called as 'update'
});

// getter 返回已注册的指令
var myDirective = Vue.directive('my-directive');

Vue.elementDirective('my-element', {
    bind: function() {

    },
    unbind: function() {

    }
});


// getter 返回已注册的元素指令
var myDirective = Vue.elementDirective('my-element');
