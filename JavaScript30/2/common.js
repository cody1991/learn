;
(function() {
	'use strict';

	const secHand = document.querySelector('.second-hand'),
		minHand = document.querySelector('.min-hand'),
		hourHand = document.querySelector('.hour-hand')

	let secondDeg = 0,
		minDeg = 0,
		hourDeg = 0

	setDate()

	function setDate() {
		const date = new Date()
		const second = date.getSeconds()
		secondDeg = 90 + (second / 60) * 360
		const min = date.getMinutes()
		minDeg = 90 + (min / 60) * 360 + ((second / 60) / 60) * 360
		const hour = date.getHours()
		hourDeg = 90 + (hour / 12) * 360 + ((min / 60) / 12) * 360 + (((second / 60) / 60) / 12) * 360
		changeDate(secondDeg, minDeg, hourDeg)
	}

	function updateDate() {
		secondDeg += (1 / 60) * 360
		minDeg += ((1 / 60) / 60) * 360
		hourDeg += (((1 / 60) / 60) / 12)
		changeDate(secondDeg, minDeg, hourDeg)
	}

	function changeDate(s, m, h) {
		secHand.style.transform = `rotate(${ s }deg)`
		minHand.style.transform = `rotate(${ m }deg)`
		hourHand.style.transform = `rotate(${ h }deg)`
	}

	setInterval(updateDate, 1000)
})();