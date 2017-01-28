const express = require('express')
const POSThttp = require('./POSThttp.js')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.post('/', (req, res) => {
  POSThttp(req).then((data) => {
    res.send(data)
  }).catch((err) => {
    res.send(err)
  })
})

app.listen(3000, () => {
  console.log('open music server successful')
})
