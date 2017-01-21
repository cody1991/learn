// module.exports = {
//   checkLogin (req, res, next) {
//     if (!req.session.user) {
//       req.flash('error', '未登录')
//       // return res.redirect('/signin')

//       return res.send({
//         'logined':
//       })
//     }
//     next()
//   },
//   checkNotLogin (req, res, next) {
//     if (req.session.user) {
//       req.flash('error', '已登陆')
//       // 返回之前的页面
//       // return res.redirect('back')
//     }
//   }
// }
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  if (!req.session.user) {
    req.flash('error', '未登录')
    return res.send({
      'hadlogin': false
    })
  } else {
    req.flash('error', '已登陆')
    return res.send({
      'hadlogin': true
    })
  }
})

module.exports = router
