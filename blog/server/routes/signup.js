const express = require('express')
const router = express.Router()

// const checkNotLogin = require('../middlewares/check').checkNotLogin

router.get('/', (req, res, next) => {
  res.send({
    title: 'signup'
  })
})

module.exports = router
