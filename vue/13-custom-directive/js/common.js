// 定义对象可以提供几个钩子函数（都是可选的）：

// bind：只调用一次，在指令第一次绑定到元素上时调用。

// update： 在 bind 之后立即以初始值为参数第一次调用，之后每当绑定值变化时调用，参数为新值与旧值。

// unbind：只调用一次，在指令从元素上解绑时调用。
// Vue.directive('my-directive', {
//     bind: function() {
//         // 准备工作
//         // 例如 添加事件处理器或者只需要运行一次的高耗任务
//     },
//     update: function(newValue, oldValue) {
//         // 值更新的工作
//         // 也会以初始值为参数调用一次
//     },
//     unbind: function() {
//         // 清理工作
//         // 例如，删除bind()添加的事件监听器
//     }
// });

// <div v-my-directive="someValue"></div>

// 当只需要 update 函数时，可以传入一个函数替代定义对象：

// Vue.directive('my-directive', function (value) {
//   // 这个函数用作 update()
// })
