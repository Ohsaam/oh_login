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

router.get('/join', function(req, res, next) {
  res.render('index', { title: '조인' , pageName: "auth/join.ejs"});
});
//router.get이 뭐냐면 /cart에 get 요청이 오게 되면 get 요청에 대해 처리한다. 
// function은 콜백함수이며, /cart에 get요청이 왔을 때 

router.get('/update', function (req, res, next) {
  res.render('index', { title: '회원정보수정', pageName: 'users/update.ejs' });
});


router.get('/mypage', function (req, res, next) {
  // res.send();파라미터 문자열이 출력되고 나는 장바구니 화면을 출력할거니까 render함수 호출함
  res.render('index', { title: 'MyPage', pageName: 'users/mypage.ejs' });
});
module.exports = router;
