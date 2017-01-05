;
(function() {
	'use strict'

	const people = [{
		name: 'Wes',
		year: 1988
	}, {
		name: 'Kait',
		year: 1986
	}, {
		name: 'Irv',
		year: 1970
	}, {
		name: 'Lux',
		year: 2015
	}, ]


	const comments = [{
		text: 'Love this!',
		id: 523423
	}, {
		text: 'Super good',
		id: 823423
	}, {
		text: 'You are the best',
		id: 2039842
	}, {
		text: 'Ramen is my fav food ever',
		id: 123523
	}, {
		text: 'Nice Nice Nice!',
		id: 542328
	}]

	const isAdult = people.some(person => {
		console.log((new Date()).getFullYear() - person.year)
		return (new Date()).getFullYear() - person.year >= 19
	})

	console.log(isAdult)

	const allAdults = people.every(person => {
		console.log((new Date()).getFullYear() - person.year)
		return (new Date()).getFullYear() - person.year >= 19
	})

	console.log(allAdults)

	const comment = comments.find((comment) => {
		return comment.id === 823423
	})

	console.log(comment)

	const index = comments.findIndex((comment) => {
		return comment.id === 823423
	})

	console.log(index)

	// comments.splice(index,1)


})();