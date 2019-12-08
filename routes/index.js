var express = require('express');
var router = express.Router();
var User = require('../models/users');


router.get('/getData', function (req, res) {
  User.find({}, function (err, data) {
    if (err) throw err;
    res.send(data)
  });
});
router.post('/setData', function (req, res) {
  console.log(req.body);
  User.remove({}, function (err, data) {
    if (err) throw err;
    res.send(data);
  });

  for (var key in req.body) {
    var user = new User((req.body[key]));
    user.save(function (err, res) {
      if (err) {
        console.log(err);
      } else {
        
      }
    });
  }

});
module.exports = router;
