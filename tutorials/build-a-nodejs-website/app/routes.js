const express = require('express')
const router = express.Router()
const path = require('path')


router.get('/', (req, res, next) => {
	// res.send('home')
	// res.sendFile(path.join(__dirname, '../index.html'))
	res.render('pages/index')
})

router.get('/about', (req, res, next) => {
	// res.send('about')

	const users = [{
		name: 'cody',
		email: 'cody@qq.com',
		avatar: 'http://lorempixel.com/400/400?01'
	}, {
		name: 'Chris',
		email: 'Chris@qq.com',
		avatar: 'http://lorempixel.com/400/400?02'
	}, {
		name: 'Ado',
		email: 'Ado@qq.com',
		avatar: 'http://lorempixel.com/400/400?03'
	}, {
		name: 'Nick',
		email: 'Nick@qq.com',
		avatar: 'http://lorempixel.com/400/400?04'
	}]

	res.render('pages/about', {
		users
	})
})

router.get('/contact', (req, res, next) => {
	// res.send('contact')
	res.render('pages/contact')
})

router.post('/contact', (req, res, next) => {
	// res.send('contact')
	// res.render('pages/contact')
	// console.log(req.body.message)
	res.send('Thanks for contacting us,' + req.body.name + '!')
})

module.exports = router