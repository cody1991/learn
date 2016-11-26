我们可以用 Vue.extend() 创建一个组件构造器：

	var MyComponent = Vue.extend({
	  // 选项...
	})

要把这个构造器用作组件，需要用 Vue.component(tag, constructor) 注册 

	// 全局注册组件，tag 为 my-component
	Vue.component('my-component', MyComponent)

组件在注册之后，便可以在父实例的模块中以自定义元素 `<my-component>` 的形式使用。要确保在初始化根实例之前注册了组件：

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

注意组件的模板替换了自定义元素，自定义元素的作用只是作为一个挂载点。可以用实例选项 replace 决定是否替换。

不需要全局注册每个组件。可以让组件只能用在其它组件内，用实例选项 components 注册：

	var Child = Vue.extend({ /* ... */ })

	var Parent = Vue.extend({
	  template: '...',
	  components: {
	    // <my-component> 只能用在父组件模板内
	    'my-component': Child
	  }
	})


----------------


子组件可以用 this.$parent 访问它的父组件。根实例的后代可以用 this.$root 访问它。父组件有一个数组 this.$children，包含它所有的子元素。

尽管可以访问父链上任意的实例，不过子组件应当避免直接依赖父组件的数据，尽量显式地使用 props 传递数据。另外，在子组件中修改父组件的状态是非常糟糕的做法，因为：

* 这让父组件与子组件紧密地耦合；

* 只看父组件，很难理解父组件的状态。因为它可能被任意子组件修改！理想情况下，只有组件自己能修改它的状态。

Vue 实例实现了一个自定义事件接口，用于在组件树中通信。这个事件系统独立于原生 DOM 事件，用法也不同。

每个 Vue 实例都是一个事件触发器：

* 使用 $on() 监听事件；

* 使用 $emit() 在它上面触发事件；

* 使用 $dispatch() 派发事件，事件沿着父链冒泡；

* 使用 $broadcast() 广播事件，事件向下传导给所有的后代。