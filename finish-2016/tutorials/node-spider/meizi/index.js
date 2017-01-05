// 引入需要的模块
const superagent = require('superagent')
const cheerio = require('cheerio')
const async = require('async')
const q = require('q')
const mkdirp = require('mkdirp')
const path = require('path')
const fs = require('fs')

// 使用 mongoose
const mongoose = require('mongoose')
mongoose.Promise = q.Promise

mongoose.connect('mongodb://localhost:27017/meizi')

mongoose.connection.on('connected', () => {
	console.log('mongoose connection successful')
})

const meiziSchema = mongoose.Schema({
	title: String,
	url: String,
	imgPages: Array,
	imgSrcs: Array
})

const meiziModel = mongoose.model('meizi', meiziSchema)

// 入口地址
const url = 'http://www.mzitu.com/all'

let downloadImgLen = 0

let asyncLimit = 40

superagent.get(url)
	.set('User-Agent', 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/535.24 (KHTML, like Gecko) Chrome/19.0.1055.1 Safari/535.24')
	.end((err, res) => {
		if (err) {
			console.error(err)
		}

		const $ = cheerio.load(res.text)

		const allLink = $('.all a')

		// 收集到的所有地址
		let items = []

		// 测试数据
		// for (let i = 0; i < 10; i++) {
		// 	const $ele = $(allLink[i])

		// 	items.push({
		// 		title: $ele.text(),
		// 		href: $ele.attr('href')
		// 	})
		// }

		// 全部数据
		allLink.each((index, ele) => {
			const $ele = $(ele)

			items.push({
				title: $ele.text(),
				href: $ele.attr('href')
			})
		})

		function fetchUrl(item, callback) {

			meiziModel.findOne({
				title: item.title
			}, function(err, doc) {

				if (err) {
					callback('err', '!数据库读取失败: ' + item.title)

					return
				}
				if (doc) {
					console.log('已经存在数据库: ' + item.title)

					callback(null, '已经存在数据库: ' + item.title)
					return

				}
				superagent.get(item.href)
					.set('User-Agent', 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/535.24 (KHTML, like Gecko) Chrome/19.0.1055.1 Safari/535.24')
					.end((err, res) => {
						if (err) {
							callback(err)
						}

						const $ = cheerio.load(res.text)

						const navLinks = $('.pagenavi a')

						const maxPage = $(navLinks[navLinks.length - 2]).find('span').text()

						// console.log(item.href)
						// console.log(maxPage)

						let imgPages = []
						for (let i = 1; i <= maxPage; i++) {
							imgPages.push(item.href + '/' + i)
						}

						const dir = './pic/' + (item.title).replace(/\?/g, '_')

						mkdirp(dir, (err) => {
							if (err) {
								console.log(err)
							} else {
								// console.log(dir + '文件夹创建成功')
							}
						})

						let imgSrcs = []


						async.mapLimit(imgPages, asyncLimit, (page, callback) => {
							fetchImgSrc(page, callback)
						}, (err, result) => {

							console.log('这个路径下的所有图片下载完成: ' + item.title)

							// 成功存储所有图片才保存
							item.imgPages = imgPages
							item.imgSrcs = imgSrcs

							item = new meiziModel(item)

							item.save((err) => {
								if (err) {
									callback(err, '!存入数据库失败: ' + item.title)
									return
								}
								console.log('成功存入数据库: ' + item.title)
								callback(null, '成功存入数据库: ' + item.title)
								return
							})
						})


						function fetchImgSrc(page, callback) {

							superagent.get(page)
								.set('User-Agent', 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/535.24 (KHTML, like Gecko) Chrome/19.0.1055.1 Safari/535.24').end((err, res) => {
									if (err) {
										console.log('!读取图片地址错误' + page)
										callback(err, '!读取图片地址错误 ' + page)
										return
									}

									const $ = cheerio.load(res.text)

									const imgSrc = $('.main-image img').attr('src')

									imgSrcs.push(imgSrc)

									const filename = imgSrc.slice(-9, -4)

									// console.log('开始下载' + filename + '.jpg文件')

									downloadImg(imgSrc, filename, (err, result) => {
										if (err) {
											callback(err, '!图片写入失败:' + filename + '.jpg')
											return
										}
										downloadImgLen++
										callback(null, '图片写入成功:' + filename + '.jpg')
									})
								})
						}

						function downloadImg(imgSrc, filename, callback2) {
							superagent.get(imgSrc)
								.set('User-Agent', 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/535.24 (KHTML, like Gecko) Chrome/19.0.1055.1 Safari/535.24').end((err, res) => {
									if (err) {
										console.log('下载失败')
									}
									const body = res.body

									const path = dir + '/' + filename + '.jpg'

									fs.writeFile(path, body, 'binary', (err) => {
										if (err) {
											console.log('!图片写入失败:' + filename + '.jpg')
											callback2(err, '!图片写入失败:' + filename + '.jpg')
											return
										}
										// console.log('图片写入成功' + filename + '.jpg')
										callback2(null, '图片写入成功' + filename + '.jpg')
									})
								})
						}

					})
			})

		}

		console.log('----开始爬虫----')
		console.time('spider')

		async.mapLimit(items, asyncLimit, (item, callback) => {
			fetchUrl(item, callback)
		}, (err, result) => {
			console.log('----爬虫完成----')

			console.log('总共用时：')
			console.timeEnd('spider')
			console.log('总共下载：')
			console.log(downloadImgLen)

			// console.log(result)
		})



	})