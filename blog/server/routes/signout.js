const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send({
    title: 'signout'
  })
})

module.exports = router
