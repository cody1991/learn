;
(function() {
	'use strict'

	const dogs = [{
		name: 'Snickers',
		age: 2
	}]

	let green = document.getElementById('green')

	green.addEventListener('click', function() {
		this.style.color = '#bada55'
		this.style.fontSize = '50px'
	})

	console.log('hello')
	console.log('Hello I am a %s string!', '💩')
	console.log('%c I am some greet text', 'font-size:50px;background:red;text-shadow:10px 10px 0 blue')
	console.warn('Warning')
	console.error('error')
	console.info('info')

	console.assert(green.classList.contains('ouch'), "That' s wrong")

	console.log(green)
	console.dir(green)
		// console.clear()

	dogs.forEach(dog => {
		console.groupCollapsed(`${dog.name}`)
		console.log(`This is ${dog.name}`)
		console.log(`${dog.name} is ${dog.age} years old`)
		console.groupEnd(`${dog.name}`)
	})

	console.count('Wes');
	console.count('Wes');
	console.count('Steve');
	console.count('Steve');
	console.count('Wes');
	console.count('Steve');
	console.count('Wes');
	console.count('Steve');
	console.count('Steve');
	console.count('Steve');
	console.count('Steve');
	console.count('Steve');

	console.time('fetching data')
	fetch('https://api.github.com/users/cody1991')
		.then(data => data.json())
		.then(data => {
			console.timeEnd('fetching data')
			console.log(data)
		})

	console.table(dogs)
})();