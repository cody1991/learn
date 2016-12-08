const request = require('request')
const mongoose = require('mongoose')
const jsdom = require('jsdom')
const q = require('q')

mongoose.Promise = q.Promise
mongoose.connect('mongodb://localhost:27017/lagou')

mongoose.connection.on('connected', () => {
	console.log('mongoose connection successful.')
})

const pSchema = mongoose.Schema({
	positionId: String,
	companyFullName: String,
	positionName: String,
	workYear: String,
	salary: String,
	description: String
})

const datestamp = (new Date()).toISOString()
	.split('T')
	.shift()
	.replace(/-/g, '_')

const pModel = mongoose.model('position' + datestamp, pSchema)

const random = 1000 * 10 * Math.random()

const keyword = '前端'
const history = []

const url = 'https://www.lagou.com/jobs/positionAjax.json?city=%E6%B7%B1%E5%9C%B3&needAddtionalResult=false&px=default'

function query(pn) {
	pn = pn || 1
	request(url, {
		method: 'POST',
		form: {
			first: 1 === pn,
			pn: pn || 1,
			kd: keyword
		},
		headers: [{
			name: 'Content-Type',
			value: 'application/x-www-form-urlencoded'
		}, {
			name: 'User-Agent',
			value: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'
		}]
	}, (err, res, body) => {
		if (err) {
			console.log('有错误')
			console.error(err)
		}

		console.log(body)
		let obj = JSON.parse(body).content
		console.log(obj)

		let pageSize = obj.pageSize
		let total = obj.positionResult.totalCount
		let result = obj.positionResult.result

		let jobDef = []

		console.log(`一共${total}条数据,当前页面${pn},${result.length}条数据`)

		result.forEach((item) => {
			let def = q.defer()
			jobDef.push(def.promise)

			if (item.positionName.indexOf(keyword) > -1 && history.indexOf(item.positionId) < 0) {
				history.push(item.positionId)

				setTimeout((position) => {

					// queryById(position)

					queryById(position).then((job) => {
						position = new pModel(job)

						position.save((err) => {
							if (err) {
								def.reject(err)
							} else {
								def.resolve()
							}
						})
					})
				}, 1000, item)
			} else {
				def.resolve()
			}
		})

		// 下一页
		pn++

		q.all(jobDef).then(() => {
			if (pn * pageSize <= total) {
				setTimeout(query(pn), random)
			}
			console.log(`抓取完毕`)
		})

	})
}

function queryById(position) {
	let def = q.defer()

	jsdom.env('http://www.lagou.com/jobs/' + position.positionId + '.html', [require('jquery')], (err, window) => {
		if (err) {
			console.error(err)
		}

		let $ = require('jquery')(window)
		position.resposibility = []
		position.request = []

		let text = $('.job_bt').text().trim()

		position.description = text

		def.resolve(position)

	})

	return def.promise
}

pModel.remove(query)