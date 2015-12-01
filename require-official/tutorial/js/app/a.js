// 直接返回一个对象，通过使用上面的方法我们可以想到可以解决全局变量概念，比如全局变量全部使用define函数包围，什么时候需要全局变量的话，直接require([‘XX’],function(XX){})这样调用下，同时所有的JS都是异步的，并不会堵塞加载。
define(function() {
    return {
        color: 'black',
        size: 'unsize'
    }
});

