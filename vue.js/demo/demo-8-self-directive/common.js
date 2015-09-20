(function() {
    // Vue.directive('my-directive', {
    //     bind: function() {
    //         // 做绑定的准备工作
    //         // 比如添加事件监听器，或是其他只需要执行一次的复杂操作
    //     },
    //     update: function(newValue, oldValue) {
    //         // 根据获得的新值执行对应的更新
    //         // 对于初始值也会被调用一次
    //     },
    //     unbind: function() {
    //         // 做清理工作
    //         // 比如移除在 bind() 中添加的事件监听器
    //     }
    // });

    Vue.directive('demo', {
        bind: function() {
            this.el.style.color = '#fff';
            this.el.style.backgroundColor = this.arg;
        },
        update: function(value) {
            this.el.innerHTML =
                'name - ' + this.name + '<br/>' +
                'raw - ' + this.raw + '<br/>' +
                'argument - ' + this.arg + '<br/>' +
                'expression - ' + this.expression + '<br/>' +
                'value - ' + value
        }
    });

    var vm = new Vue({
        el: '#demo',
        data: {
            msg: 'hello!'
        }
    });


})();
