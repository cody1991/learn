Vue.filter('reverse', function(value) {
    return value.split('').reverse().join('');
});

Vue.filter('wrap', function(value, begin, end) {
    return begin + ' ' + value + ' ' + end;
});

Vue.filter('currencyDisplay', {
    // model -> view
    // 在更新 input 元素之前格式化值
    read: function(val) {
        return '$' + val.toFixed(2);
    },
    // view -> model
    // 在写回数据之前格式化值
    write: function(val, oldVal) {
        var number = +val.replace(/[^\d.]/g, '');
        return isNaN(number) ? 0 : parseFloat(number.toFixed(2));
    }
});
// 目前我们使用过滤器都是在把来自模型的值显示在视图之前转换它。不过也可以定义一个过滤器，在把来自视图（<input> 元素）的值写回模型之前转化它：


Vue.filter('concat', function(value, input) {
    return value + input;
});

// 如果过滤器参数没有用引号包起来，则它会在当前 vm 作用域内动态计算。另外，过滤器函数的 this 始终指向调用它的 vm。例如：

var app = new Vue({
    el: '#app',
    data: {
        message: 'init',
        money: 0,
        msg: 'hello',
        userInput: ''
    }
});
