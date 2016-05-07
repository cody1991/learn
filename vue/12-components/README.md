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