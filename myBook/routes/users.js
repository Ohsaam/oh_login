var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cart', function(req, res, next) {
  res.render('index', { title: '장바구니', pageName : "users/cart.ejs"});
});

module.exports = router;
