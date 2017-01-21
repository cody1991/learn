var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  let db = req.db
  let user = db.get('nodetest')
 
  user.find({}, {}, function(e, docs) {
    res.render('users', {
      "users" : docs
    })
  })
});

router.get('/adduser',function(req,res){
   res.render('adduser',{title: 'adduser'})
})

router.post('/adduser',function(req,res) {
  let db = req.db
  let userName = req.body.username
  let userAge = req.body.userage
  let userSex = req.body.usersex
  let user = db.get('nodetest')

  user.insert({
    "name": userName,
    "age": userAge,
    "sex": userSex
  },function(err,doc){
    if (err) res.send("error")
    res.redirect("/users")
  })
})

module.exports = router;
