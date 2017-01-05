;
(function() {
	'use strict'

	const inputs = document.querySelectorAll('.controls input')

	function handleUpdate() {
		// HTML5 中的自定义数据属性 dataset
		// HTML5 中可以为元素添加非标准的自定义属性，只需要加上 data- 前缀，可以随便添加和命名。添加之后，可以通过元素的 dataset 属性来访问这些值，dataset 的值是 DOMStringMap 的一个实例化对象，其中包含之前所设定的自定义属性的“名-值”对
		const suffix = this.dataset.sizing || ''

		// 在 JavaScript 中 document.documentElement 即代表文档根元素。所以要改变全局的 CSS 变量，可以这样写：
		// document.documentElement.style.setProperty('--base', '#fff');

		document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
	}

	// NodeList 和 Array 的区别
	// 可以打开 proto 查看它的方法，其中有 forEach()、item()、keys() 等。而 Array 的 prototype 中有 map()、pop() 等数组才有的方法。
	inputs.forEach((input) => {
		input.addEventListener('change', handleUpdate)
		input.addEventListener('mousemove', handleUpdate)
	})
})()