transition 特性可以与下面资源一起用：

* v-if
* v-show
* v-for （只在插入和删除时触发，使用 [vue-animated-list](https://github.com/vuejs/vue-animated-list) 插件）
* 动态组件 （介绍见组件）
* 在组件的根节点上，并且被 Vue 实例 DOM 方法（如 vm.$appendTo(el)）触发

当插入或删除带有过渡的元素时，Vue 将：

* 尝试以 ID "my-transition" 查找 JavaScript 过渡钩子对象——通过 Vue.transition(id, hooks) 或 transitions 选项注册。如果找到了，将在过渡的不同阶段调用相应的钩子。
* 自动嗅探目标元素是否有 CSS 过渡或动画，并在合适时添加/删除 CSS 类名。
* 如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作（插入/删除）在下一帧中立即执行。

类名的添加和切换取决于 transition 特性的值。比如 transition="fade"，会有三个 CSS 类名：

* .fade-transition 始终保留在元素上。

* .fade-enter 定义进入过渡的开始状态。只应用一帧然后立即删除。

* .fade-leave 定义离开过渡的结束状态。在离开过渡开始时生效，在它结束后删除。

如果 transition 特性没有值，类名默认是 .v-transition, .v-enter 和 .v-leave。

Vue.js 需要给过渡元素添加事件侦听器来侦听过渡何时结束。基于所使用的 CSS，该事件要么是 transitionend，要么是 animationend。如果你只使用了两者中的一种，那么 Vue.js 将能够根据生效的 CSS 规则自动推测出对应的事件类型。但是，有些情况下一个元素可能需要同时带有两种类型的动画。比如你可能希望让 Vue 来触发一个 CSS animation，同时该元素在鼠标悬浮时又有 CSS transition 效果。这样的情况下，你需要显式地声明你希望 Vue 处理的动画类型 (animation 或是 transition)：

	Vue.transition('bounce', {
	  // 该过渡效果将只侦听 `animationend` 事件
	  type: 'animation'
	})

当 show 属性改变时，Vue.js 将相应地插入或删除 <div> 元素，按照如下规则改变过渡的 CSS 类名：

如果 show 变为 false，Vue.js 将：

* 调用 beforeLeave 钩子；
* 添加 v-leave 类名到元素上以触发过渡；
* 调用 leave 钩子；
* 等待过渡结束（监听 transitionend 事件）；
* 从 DOM 中删除元素并删除 v-leave 类名；
* 调用 afterLeave 钩子。

如果 show 变为 true，Vue.js 将：

* 调用 beforeEnter 钩子；
* 添加 v-enter 类名到元素上；
* 把它插入 DOM；
* 调用 enter 钩子；
* 强制一次 CSS 布局，让 v-enter 确实生效。然后删除 v-enter 类名，以触发过渡，回到元素的原始状态；
* 等待过渡结束；
* 调用 afterEnter 钩子。

另外，如果在它的进入过渡还在进行中时删除元素，将调用 enterCancelled 钩子，以清理变动或 enter 创建的计时器。反过来对于离开过渡亦如是。

上面所有的钩子函数在调用时，它们的 this 均指向其所属的 Vue 实例。编译规则：过渡在哪个上下文中编译，它的 this 就指向哪个上下文。

最后，enter 和 leave 可以有第二个可选的回调参数，用于显式控制过渡如何结束。因此不必等待 CSS transitionend 事件， Vue.js 将等待你手工调用这个回调，以结束过渡。例如：

	enter: function (el) {
	  // 没有第二个参数
	  // 由 CSS transitionend 事件决定过渡何时结束
	}

	enter: function (el, done) {
	  // 有第二个参数
	  // 过渡只有在调用 `done` 时结束
	}