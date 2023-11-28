var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); 
// res.send('respond with a resource'): 이 부분은 클라이언트에게 응답을 보내는 역할


router.get('/mypage', function(req, res, next) {
  res.render('index', { title: '장바구니', pageName : "users/mypage.ejs"});

});

router.get('/youtube', function(req, res, next) {
  res.render('index', { title: '유튜브' , pageName: "users/youtube.ejs"});
});

router.get('/join', function(req, res, next) {
  res.render('index', { title: '조인' , pageName: "auth/join.ejs"});
});

router.get('/update/:id', function (req, res, next) {
  let id = req.params.id;
  res.render('index', { title: '회원정보수정', pageName: 'users/update.ejs', id:id });
});

router.get('/calender', function(req, res, next) {
  res.render('index', { title: '캘린더' , pageName: "users/calender.ejs"});
});


router.get('/mypage/:id', function (req, res, next) {
  // res.send();파라미터 문자열이 출력되고 나는 장바구니 화면을 출력할거니까 render함수 호출함
  let id = req.params.id;
  res.render('index', { title: 'MyPage', pageName: 'users/mypage.ejs', id:id });
});
module.exports = router;
