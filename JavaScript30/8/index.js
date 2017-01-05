;
(function() {
	'use strict'

	const canvas = document.querySelector('#draw')
	const ctx = canvas.getContext('2d')

	// var w = window,
	//    d = document,
	//    e = d.documentElement,
	//    b = d.getElementsByTagName('body')[0],
	//    x = w.innerWidth || e.clientWidth || b.clientWidth,
	//    y = w.innerHeight|| e.clientHeight|| b.clientHeight;

	canvas.width = window.innerWidth
	canvas.height = window.innerHeight

	// window.addEventListener('resize', () => {
	// 	canvas.width = window.innerWidth
	// 	canvas.height = window.innerHeight
	// 	ctx.lineWidth = 70
	// })

	// 	对于这个用于渲染的 ctx（请自动替换成上下文这个别扭的词），有一些基本样式属性可供修改，类似于配置你的调色盘：

	// lineCap：笔触的形状，有 round | butt | square 圆、平、方三种。
	// lineJoin：线条相较的方式，有 round | bevel | miter 圆交、斜交、斜接三种。
	// lineWidth：线条的宽度
	// strokeStyle：线条描边的颜色
	// fillStyle：填充的颜色

	ctx.strokeStyle = '#bada55'
	ctx.lineJoin = 'round'
	ctx.lineCap = 'round'
	ctx.lineWidth = 70

	let isDrawing = false,
		lastX = 0,
		lastY = 0,
		x = 0,
		y = 0,
		hue = 0,
		direction = true

	function draw(e) {
		if (!isDrawing) {
			return
		}

		if (e.type == "mousemove") {
			x = e.offsetX
			y = e.offsetY
		} else {
			x = e.changedTouches[0].clientX
			y = e.changedTouches[0].clientY
		}

		// 在这个挑战中，涉及到改变线条的颜色，如何实现彩虹的渐变效果？我们需要利用 HSL 色彩模式，首先可以去这个网站 http://mothereffinghsl.com 感受一下 HSL 不同色彩值对应的效果。

		// H(hue) 代表色调，取值为 0~360，专业术语叫色相
		// S 是饱和度，可以理解为掺杂进去的灰度值，取值为 0~1
		// L 则是亮度，取值也是 0~1，或者百分比。
		// 这之中 H 值从 0 到 360 的变化代表了色相的角度的值域变化，利用这一点就可以实现绘制时线条颜色的渐变了，只需要在它的值超过 360 时恢复到 0 重新累加即可。

		ctx.strokeStyle = `hsl(${hue},100%,50%)`


		// Canvas 让 JS 具备了动态绘制图形的能力，但在这里例子中我们只需要使用到一些简单的路径绘制方法，路径是点和线的集合，下面只列举了我们用到的方法：

		// beginPath()：新建一条路径
		// stroke()：绘制轮廓
		// moveTo()：（此次）绘制操作的起点
		// lineTo()：路径的终点

		ctx.beginPath()
		ctx.moveTo(lastX, lastY)

		ctx.lineTo(x, y)
		ctx.stroke()

		lastX = x
		lastY = y

		hue++

		if (hue >= 360) {
			hue = 0
		}

		if (ctx.lineWidth >= 70 || ctx.lineWidth <= 30) {
			direction = !direction
		}

		if (direction) {
			ctx.lineWidth++
		} else {
			ctx.lineWidth--
		}

		console.log(ctx.lineWidth)

	}

	canvas.addEventListener('touchstart', (e) => {
		isDrawing = true

		console.log(e)

		lastX = e.changedTouches[0].clientX
		lastY = e.changedTouches[0].clientY
	})
	canvas.addEventListener('touchmove', draw)
	canvas.addEventListener('touchend', () => isDrawing = false)
	canvas.addEventListener('touchcancel', () => isDrawing = false)

	canvas.addEventListener('mousedown', (e) => {
		isDrawing = true

		lastX = e.offsetX
		lastY = e.offsetY
	})
	canvas.addEventListener('mousemove', draw)
	canvas.addEventListener('mouseup', () => isDrawing = false)
	canvas.addEventListener('mouseout', () => isDrawing = false)
})();