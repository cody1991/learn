;
(function() {
	'use strict'

	const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

	const cities = []

	// ES5
	// var arr1 = [0, 1, 2];
	// var arr2 = [3, 4, 5];
	// Array.prototype.push.apply(arr1, arr2);
	// ES6
	// var arr1 = [0, 1, 2];
	// var arr2 = [3, 4, 5];
	// arr1.push(...arr2);

	// 试了下，自己的 chrome 不支持这个。。
	// fetch(endpoint)
	// 	.then(blob => blob.json())
	// 	.then(data => cities.push(..data))

	fetch(endpoint)
		.then(blob => blob.json())
		.then(data => {
			Array.prototype.push.apply(cities, data);
			console.log(cities)
		})

	function findMatches(wordToMatch, cities) {
		return cities.filter(place => {
			const regex = new RegExp(wordToMatch, 'gi')
			return place.city.match(regex) || place.state.match(regex)
		})
	}

	function numberWithCommas(x) {
		// return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

		// 假如我们只是写
		// return x.toString().replace(/\B/g, ',');
		// 12345 ->  1,2,3,4,5，所以在找非边缘的来切换
		// 这个正则后面都是不捕获，所以就是在这几个地方填充 , 了

		// 假如我们写
		// return x.toString().replace(/\B(?=(\d{3}))/g, ',');
		// 说法就是贪婪吧，往后找
		// 1553165 -> 1,5,5,3,165

		// 这次换成这个
		// return x.toString().replace(/\B(?=(\d{3})+)/g, ',');
		// 还是 1553165 -> 1,3,5,5,896

		// 再来试试
		// return x.toString().replace(/\B(?=(?!\d))/g, ',');
		// 没反应，原本返回

		// 两个结合

		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '$`');
		// 8,405,837

		// (?!\d) 要返回 不是数字的，保证不把下一个整数拉进来


	}

	const searchInput = document.querySelector('.search')
	const suggestions = document.querySelector('.suggestions')

	function displayMatches() {
		const matchArray = findMatches(this.value, cities)

		// console.log(matchArray)
		const html = matchArray.map(place => {
			const regex = new RegExp(this.value, 'gi')
			const cityName = place.city.replace(regex, '<span class="hl">$&</span>')
			const stateName = place.city.replace(regex, `<span class="hl">$&</span>`)

			return `
				<li>
					<span class="name">${cityName},${stateName}</span>
					<span class="population">
						${numberWithCommas(place.population)}
					</span>
				</li>
			`
		}).join('')
		suggestions.innerHTML = html
	}

	searchInput.addEventListener('change', displayMatches)
	searchInput.addEventListener('keyup', displayMatches)


})();