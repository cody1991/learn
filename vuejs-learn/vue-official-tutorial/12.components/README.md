##使用组件

###注册

之前说过，我们可以用 Vue.extend() 创建一个组件构造器：

    var MyComponent = Vue.extend({
      // 选项...
    })

要把这个构造器用作组件，需要用 Vue.component(tag, constructor) 注册 ：

    // 全局注册组件，tag 为 my-component
    Vue.component('my-component', MyComponent)

在注册之后，组件便可以用在父实例的模块中，以自定义元素 <my-component> 的形式使用。要确保在初始化根实例之前注册了组件：

    <div id="example">
      <my-component></my-component>
    </div>

    // 定义
    var MyComponent = Vue.extend({
      template: '<div>A custom component!</div>'
    })

    // 注册
    Vue.component('my-component', MyComponent)

    // 创建根实例
    new Vue({
      el: '#example'
    })

渲染为：

    <div id="example">
      <div>A custom component!</div>
    </div>

注意组件的模板替换了自定义元素，自定义元素的作用只是作为一个挂载点。这可以用实例选项 replace 改变。

###局部注册

不需要全局注册每个组件。可以让组件只能用在其它组件内，用实例选项 components 注册：

    var Child = Vue.extend({ /* ... */ })

    var Parent = Vue.extend({
      template: '...',
      components: {
        // <my-component> 只能用在父组件模板内
        'my-component': Child
      }
    })

这种封装也适用于其它资源，如指令、过滤器和过渡。

###注册语法糖

为了让事件更简单，可以直接传入选项对象而不是构造器给 Vue.component() 和 component 选项。Vue.js 在背后自动调用 Vue.extend()：

    // 在一个步骤中扩展与注册
    Vue.component('my-component', {
      template: '<div>A custom component!</div>'
    })

    // 局部注册也可以这么做
    var Parent = Vue.extend({
      components: {
        'my-component': {
          template: '<div>A custom component!</div>'
        }
      }
    })

###组件选项问题

传入 Vue 构造器的多数选项也可以用在 Vue.extend() 中，不过有两个特例： data and el。试想如果我们简单地把一个对象作为 data 选项传给 Vue.extend()：

    var data = { a: 1 }
    var MyComponent = Vue.extend({
      data: data
    })

这么做的问题是 MyComponent 所有的实例将共享同一个 data 对象！这基本不是我们想要的，因此我们应当使用一个函数作为 data 选项，函数返回一个新对象：

    var MyComponent = Vue.extend({
      data: function () {
        return { a: 1 }
      }
    })

同理，el 选项用在 Vue.extend() 中时也须是一个函数。

###is特性

一些 HTML 元素，如 `<table>`，限制什么元素可以放在它里面。自定义元素不在白名单上，将被放在元素的外面，因而渲染不正确。这时应当使用 is 特性，指示它是一个自定义元素：

    <table>
      <tr is="my-component"></tr>
    </table>

##Props

###使用Props传递数据

组件实例的作用域是孤立的。这意味着不能并且不应该在子组件的模板内直接引用父组件的数据。可以使用 props 把数据传给子组件。

“prop” 是组件数据的一个字段，期望从父组件传下来。子组件需要显式地用 props 选项 声明 props：

    Vue.component('child', {
      // 声明 props
      props: ['msg'],
      // prop 可以用在模板内
      // 可以用 `this.msg` 设置
      template: '<span>{{ msg }}</span>'
    })

然后向它传入一个普通字符串：

    <child msg="hello!"></child>

###camelCase vs. kebab-case

HTML 特性不区分大小写。名字形式为 camelCase 的 prop 用作特性时，需要转为 kebab-case（短横线隔开）

    Vue.component('child', {
      // camelCase in JavaScript
      props: ['myMessage'],
      template: '<span>{{ myMessage }}</span>'
    })

    <!-- kebab-case in HTML -->
    <child my-message="hello!"></child>

###字面量语法 vs. 动态语法

初学者常犯的一个错误是使用字面量语法传递数值：

    <!-- 传递了一个字符串 "1" -->
    <comp some-prop="1"></comp>

因为它是一个字面 prop，它的值以字符串 "1" 而不是以实际的数字传下去。如果想传递一个实际的 JavaScript 数字，需要使用动态语法，从而让它的值被当作 JavaScript 表达式计算：

    <!-- 传递实际的数字  -->
    <comp :some-prop="1"></comp>

###Prop绑定类型

prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。不过，也可以使用 .sync 或 .once 绑定修饰符显式地强制双向或单次绑定：

比较语法：

    <!-- 默认为单向绑定 -->
    <child :msg="parentMsg"></child>

    <!-- 双向绑定 -->
    <child :msg.sync="parentMsg"></child>

    <!-- 单次绑定 -->
    <child :msg.once="parentMsg"></child>

双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。

###Prop验证

组件可以为 props 指定验证要求。当组件给其他人使用时这很有用，因为这些验证要求构成了组件的 API，确保其他人正确地使用组件。此时 props 的值是一个对象，包含验证要求：

    Vue.component('example', {
      props: {
        // 基础类型检测 （`null` 意思是任何类型都可以）
        propA: Number,
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
          default: function () {
            return { msg: 'hello' }
          }
        },
        // 指定这个 prop 为双向绑定
        // 如果绑定类型不对将抛出一条警告
        propE: {
          twoWay: true
        },
        // 自定义验证函数
        propF: {
          validator: function (value) {
            return value > 10
          }
        },
        // 转换函数（1.0.12 新增）
        // 在设置值之前转换值
        propG: {
          coerce: function (val) {
            return val + '' // 将值转换为字符串
          }
        },
        propH: {
          coerce: function (val) {
            return JSON.parse(val) // 将 JSON 字符串转换为对象
          }
        }
      }
    })

type 可以是下面原生构造器：

    String
    Number
    Boolean
    Function
    Object
    Array

type 也可以是一个自定义构造器，使用 instanceof 检测。

当 prop 验证失败了，Vue 将拒绝在子组件上设置此值，如果使用的是开发版本会抛出一条警告。

##父子组件通信

###父链

子组件可以用 this.$parent 访问它的父组件。根实例的后代可以用 this.$root 访问它。父组件有一个数组 this.$children，包含它所有的子元素。

尽管可以访问父链上任意的实例，不过子组件应当避免直接依赖父组件的数据，应当显式地使用 props 传递数据。另外，在子组件中修改父组件的状态是非常糟糕的做法，因为：

    这让父组件与子组件紧密地耦合；

    只看父组件，很难理解父组件的状态。因为它可能被任意子组件修改！理想情况下，只有组件自己能修改它的状态。

###自定义事件

Vue 实例实现了一个自定义事件接口，用于在组件树中通信。这个事件系统独立于原生 DOM 事件，做法也不同。

每个 Vue 实例都是一个事件触发器：

    使用 $on() 监听事件；

    使用 $emit() 在它上面触发事件；

    使用 $dispatch() 派发事件，事件沿着父链冒泡；

    使用 $broadcast() 广播事件，事件向下传导给所有的后代。

不同于 DOM 事件，Vue 事件在冒泡过程中第一次触发回调之后自动停止冒泡，除非回调明确返回 true。

简单例子：

    <!-- 子组件模板 -->
    <template id="child-template">
      <input v-model="msg">
      <button v-on:click="notify">Dispatch Event</button>
    </template>

    <!-- 父组件模板 -->
    <div id="events-example">
      <p>Messages: {{ messages | json }}</p>
      <child></child>
    </div>
    // 注册子组件
    // 将当前消息派发出去
    Vue.component('child', {
      template: '#child-template',
      data: function () {
        return { msg: 'hello' }
      },
      methods: {
        notify: function () {
          if (this.msg.trim()) {
            this.$dispatch('child-msg', this.msg)
            this.msg = ''
          }
        }
      }
    })

    // 启动父组件
    // 将收到消息时将事件推入一个数组
    var parent = new Vue({
      el: '#events-example',
      data: {
        messages: []
      },
      // 在创建实例时 `events` 选项简单地调用 `$on`
      events: {
        'child-msg': function (msg) {
          // 事件回调内的 `this` 自动绑定到注册它的实例上
          this.messages.push(msg)
        }
      }
    })

###使用v-on绑定自定义事件

上例非常好，不过看着父组件的代码， "child-msg" 事件来自哪里不直观。如果我们在模板中子组件用到的地方声明事件处理器会更好。为了做到这点，子组件可以用 v-on 监听自定义事件：

    <child v-on:child-msg="handleIt"></child>

这让事情非常清晰：当子组件触发了 "child-msg" 事件，父组件的 handleIt 方法将被调用。所有影响父组件状态的代码放到父组件的 handleIt 方法中；子组件只关注触发事件。

###子组件索引

尽管有 props 和 events，但是有时仍然需要在 JavaScript 中直接访问子组件。为此可以使用 v-ref 为子组件指定一个索引 ID。例如：

    <div id="parent">
      <user-profile v-ref:profile></user-profile>
    </div>

    var parent = new Vue({ el: '#parent' })
    // 访问子组件
    var child = parent.$refs.profile

v-ref 和 v-for 一起用时，ref 是一个数组或对象，包含相应的子组件。

## 使用Slot分发内容

在使用组件时，常常要像这样组合它们：

    <app>
      <app-header></app-header>
      <app-footer></app-footer>
    </app>

注意两点：

`<app>` 组件不知道它的挂载点会有什么内容，挂载点的内容是由 `<app>` 的父组件决定的。

`<app>` 组件很可能有它自己的模板。

为了让组件可以组合，我们需要一种方式来混合父组件的内容与子组件自己的模板。这个处理称为内容分发（或 “transclusion”，如果你熟悉 Angular）。Vue.js 实现了一个内容分发 API，参照了当前 Web 组件规范草稿，使用特殊的 `<slot>` 元素作为原始内容的插槽。

###编译作用域

在深入内容分发 API 之前，我们先明确内容的编译作用域。假定模板为：

    <child>
      {{ msg }}
    </child>

msg 应该绑定到父组件的数据，还是绑定到子组件的数据？答案是父组件。组件作用域简单地说是：

    父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译

一个常见错误是试图在父组件模板内将一个指令绑定到子组件属性/方法：

    <!-- 无效 -->
    <child v-show="someChildProperty"></child>

假定 someChildProperty 是子组件的属性，上例不能如预期工作。父组件模板不知道子组件的状态。

如果要绑定子组件内的指令到一个组件的根节点，应当在它的模板内这么做：

    Vue.component('child-component', {
      // 有效，因为是在正确的作用域内
      template: '<div v-show="someChildProperty">Child</div>',
      data: function () {
        return {
          someChildProperty: true
        }
      }
    })

类似地，分发内容是在父组件作用域内编译。

###单个Slot