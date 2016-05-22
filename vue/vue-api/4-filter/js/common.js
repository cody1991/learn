Vue.filter('my-filter', function(value) {
    // 返回处理后的值
});

// 双向过滤器
Vue.filter('my-filter', {
    read: function() {

    },
    write: function() {

    }
});

// getter 返回已注册的指令

var myFilter = Vue.filter('my-filter');
