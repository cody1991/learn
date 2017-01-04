;
(function() {
	'use strict'


	// es5
	// const keys = Array.prototype.slice.call(document.querySelectorAll('.key'), 0);

	// es6
	const keys = Array.from(document.querySelectorAll('.key'))

	keys.forEach((key) => {
		key.addEventListener('transitionend', removeTransition)
	})

	function removeTransition(event) {
		// 监听  transitionend 
		console.log(event.propertyName)
		console.log(event)

		// bubbles true
		// cancelBubble:false
		// currentTarget:null
		// defaultPrevented:false
		// propertyName:'transform'
		// returnValue:true
		// srcElement:div.key
		// target:div.key
		// path:[div.key,div.keys,body,html,document,window]

		// ----

		// 事件的属性名 等于 transform 
		// 还有可能是下面几个
		// common.js:17 border-right-color
		// common.js:17 border-left-color
		// common.js:17 transform
		// common.js:17 border-bottom-color
		// common.js:17 border-top-color
		// common.js:17 box-shadow
		if (event.propertyName !== 'transform') {
			return
		}
		// console.log(this)

		// event.target 事件的目标
		// remove 移除类
		event.target.classList.remove('playing');
	}

	window.addEventListener('keydown', playSound)

	function playSound(event) {

		// if (document.querySelector('.playing')) {
		// 	document.querySelector('.playing').classList.remove('playing')
		// }

		// keydown的时候，处理。
		// event 会自己传入

		// event.keyCode 查看按键对应的码
		// http://keycode.info/ 这里可以查找
		const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
		const key = document.querySelector(`div[data-key="${event.keyCode}"]`)

		if (!audio) {
			return;
		}

		// 使用 classList.add 增加类
		key.classList.add('playing')

		// 设置播放时间在第一格
		audio.currentTime = 0;
		audio.play()
	}

	console.log(keys);
})();