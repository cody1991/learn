// const http = require('http')

// function handleRequests(req, res) {
// 	res.end('hello world')
// }

// const server = http.createServer(handleRequests);

// server.listen(8080, () => {
// 	console.log('listening on port 8080')
// })

const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 8080


app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded())

const router = require('./app/routes')
app.use('/', router)


app.listen(port, function() {
	console.log('app started')
})