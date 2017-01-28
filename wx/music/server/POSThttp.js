const formatURL = require('./formatURL.js')

const http = require('http')

const POSThtpp = function (request) {
  return new Promise((resolve, reject) => {
    let body = ''
    http.get(formatURL(request.body.musicname), function (res) {
      res.on('data', (data) => {
        body += data
      }).on('end', () => {
        console.log(JSON.parse(body))
        const {
          name,
          audio: musicUrl,
          page,
          album: {
            name: musicName,
            picUrl
          },
          artists: [{
            name: singer
          }]
        } = JSON.parse(body).result.songs[0]

        const reply = {
          name,
          picUrl,
          musicUrl,
          page,
          singer
        }

        resolve(reply)
      })
    })
  })
}

module.exports = POSThtpp
