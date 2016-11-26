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

Vue.directive('demo', {
    params: ['a'],
    paramWatchers: {
        a: function(val, oldValue) {
            console.log('a Changed!' + val + oldValue);
        }
    },
    bind: function() {
        console.log('demo bound!');

        console.log(this.params.a)
    },
    update: function(value) {
        this.el.innerHTML =
            'name - ' + this.name + '<br>' +
            'expression - ' + this.expression + '<br>' +
            'argument - ' + this.arg + '<br>' +
            'modifiers - ' + JSON.stringify(this.modifiers) + '<br>' +
            'value - ' + JSON.stringify(value)
    }
});

var demo = new Vue({
    el: '#demo-wrapper',
    data: {
        msg: 'hello!',
        hi: 'hi2'
    }
});


// 有时我们想以自定义元素的形式使用指令，而不是以特性的形式。这与 Angular 的 “E” 指令非常相似。元素指令可以看做是一个轻量组件。可以像下面这样注册一个自定义元素指令：

// Vue.elementDirective('my-directive', {
//   // API 同普通指令
//   bind: function () {
//     // 操作 this.el...
//   }
// })

// <my-directive></my-directive>

// Vue.directive('example', {
//   twoWay: true,
//   bind: function () {
//     this.handler = function () {
//       // 将数据写回 vm
//       // 如果指令这样绑定 v-example="a.b.c"
//       // 它将用给定值设置 `vm.a.b.c`
//       this.set(this.el.value)
//     }.bind(this)
//     this.el.addEventListener('input', this.handler)
//   },
//   unbind: function () {
//     this.el.removeEventListener('input', this.handler)
//   }
// })


// 传入 acceptStatement:true 可以让自定义指令接受内联语句，就像 v-on 那样：

// <div v-my-directive="a++"></div>

// Vue.directive('my-directive', {
//   acceptStatement: true,
//   update: function (fn) {
//     // 传入值是一个函数
//     // 在调用它时将在所属实例作用域内计算 "a++" 语句
//   }
// })


// 如果自定义指令用在一个对象上，当对象内部属性变化时要触发 update，则在指令定义对象中指定 deep: true。
