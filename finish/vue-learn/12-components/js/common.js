// var myComponent = Vue.extend({
//     template: '<div>A custom component!</div>'
// });

// Vue.component('my-component', myComponent);

// ---
// ↓
// ---


// 为了让事件更简单，可以直接传入选项对象而不是构造器给 Vue.component() 和 component 选项。Vue.js 在背后自动调用 Vue.extend()

// HTML 特性不区分大小写。名字形式为 camelCase 的 prop 用作特性时，需要转为 kebab-case（短横线隔开）：
Vue.component('my-component', {
    props: ['msg', 'myClass'],
    template: '<div :class="myClass">A custom component! {{msg}}</div>'
});

// 因为它是一个字面 prop，它的值以字符串 "1" 而不是以实际的数字传下去。如果想传递一个实际的 JavaScript 数字，需要使用动态语法，从而让它的值被当作 JavaScript 表达式计算：

// <!-- 传递实际的数字  -->
// <comp :some-prop="1"></comp>

// prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。不过，也可以使用 .sync 或 .once 绑定修饰符显式地强制双向或单次绑定：

// <!-- 默认为单向绑定 -->
// <child :msg="parentMsg"></child>

// <!-- 双向绑定 -->
// <child :msg.sync="parentMsg"></child>

// <!-- 单次绑定 -->
// <child :msg.once="parentMsg"></child>

var app = new Vue({
    el: '#app',
    data: {
        parentMsg: 'Message from parent'
    }
});


Vue.component('example', {
    props: {
        // 基础类型检测 （`null` 意思是任何类型都可以）
        propA: Number,
        // 多种类型 (1.0.21+)
        propM: [String, Number],
        // 必需且是字符串
        propB: {
            type: String,
            required: true
        },
        // 数字，有默认值
        propC: {
            type: Number,
            default: 100
        },
        // 对象/数组的默认值应当由一个函数返回
        propD: {
            type: Object,
            default: function() {
                return {
                    msg: 'hello'
                }
            }
        },
        // 指定这个 prop 为双向绑定
        // 如果绑定类型不对将抛出一条警告
        propE: {
            twoWay: true
        },
        // 自定义验证函数
        propF: {
            validator: function(value) {
                return value > 10;
            }
        },
        // 转换函数（1.0.12 新增）
        // 在设置值之前转换值
        propG: {
            coerce: function(val) {
                return val + '';
            }
        },
        propH: {
            coerce: function(val) {
                return JSON.parse(val);
            }
        }
    }
});

// type 可以是下面原生构造器：

// String
// Number
// Boolean
// Function
// Object
// Array

Vue.component('child', {
    template: '#child-template',
    // 这么做的问题是 MyComponent 所有的实例将共享同一个 data 对象！这基本不是我们想要的，因此我们应当使用一个函数作为 data 选项，让这个函数返回一个新对象
    data: function() {
        return {
            msg: 'hello'
        }
    },
    methods: {
        notify: function() {
            if (this.msg.trim()) {
                this.$dispatch('child-msg', this.msg);
                this.msg = ''
            }
        }
    }
});

var parent = new Vue({
    el: '#events-example',
    data: {
        messages: []
    },
    // events: {
    //     'child-msg': function(msg) {
    //         this.messages.push(msg);
    //     }
    // }
    methods: {
        handleIt: function(msg) {
            this.messages.push(msg);
        }
    }
});

// 尽管有 props 和 events，但是有时仍然需要在 JavaScript 中直接访问子组件。为此可以使用 v-ref 为子组件指定一个索引 ID。例如：
// <div id="parent">
// 	<user-profile v-ref:profile></user-profile>
// </div>

// var parent = new Vue({
// 	el: '#parent'
// });

// var child = parent.$refs.profile;


Vue.component('child-singleslot', {
    template: '#child-singleslot',
});


var signleSlot = new Vue({
    el: '#singleSlot'
});

// 多个组件可以使用同一个挂载点，然后动态地在它们之间切换。使用保留的 <component> 元素，动态地绑定到它的 is 特性：

// new Vue({
//   el: 'body',
//   data: {
//     currentView: 'home'
//   },
//   components: {
//     home: { /* ... */ },
//     posts: { /* ... */ },
//     archive: { /* ... */ }
//   }
// })

// <component :is="currentView">
//   <!-- 组件在 vm.currentview 变化时改变 -->
// </component>

// 如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive 指令参数：

// <component :is="currentView" keep-alive>
//   <!-- 非活动组件将被缓存 -->
// </component>

// 在切换组件时，切入组件在切入前可能需要进行一些异步操作。为了控制组件切换时长，给切入组件添加 activate 钩子：

// Vue.component('activate-example', {
//   activate: function (done) {
//     var self = this
//     loadDataAsync(function (data) {
//       self.someData = data
//       done()
//     })
//   }
// })

// 注意 activate 钩子只作用于动态组件切换或静态组件初始化渲染的过程中，不作用于使用实例方法手工插入的过程中。


// transition-mode 特性用于指定两个动态组件之间如何过渡。

// 在默认情况下，进入与离开平滑地过渡。这个特性可以指定另外两种模式：

// in-out：新组件先过渡进入，等它的过渡完成之后当前组件过渡出去。

// out-in：当前组件先过渡出去，等它的过渡完成之后新组件过渡进入。

// <component
//   :is="view"
//   transition="fade"
//   transition-mode="out-in">
// </component>

// .fade-transition {
//   transition: opacity .3s ease;
// }
// .fade-enter, .fade-leave {
//   opacity: 0;
// }

var transitionModeDemo = new Vue({
    el: '#transition-mode-demo',
    data: {
        view: 'v-a'
    },
    components: {
        'v-a': {
            template: '<div>Component A</div>'
        },
        'v-b': {
            template: '<div>Component B</div>'
        }
    }
});

// Vue.js 组件 API 来自三部分——prop，事件和 slot：

// prop 允许外部环境传递数据给组件；

// 事件 允许组件触发外部环境的 action；

// slot 允许外部环境插入内容到组件的视图结构内。

// 使用 v-bind 和 v-on 的简写语法，模板的缩进清楚且简洁：

// <my-component
// 	:foo="baz"
// 	:bar = "quz"
// 	@event-a="doThis"
// 	@event-b="doThat"
// 	<img slot="icon" src="...">
// 	<p slot="main-text">Hello!</p>
// </my-component>
