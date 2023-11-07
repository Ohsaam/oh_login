var express = require('express');
var router = express.Router();


// '/' 경로에 대한 GET 요청을 처리하는 라우터가 정의
router.get('/', function(req, res, next) {
  res.render('index', { title: '도서관리시스템', pageName : "header.ejs"});
});
//  function(req, res, next) 이 함수는 / 경로에 대한 HTTP GET 요청이 들어올 때 실행된다.
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인' , pageName: "auth/login.ejs"});
});
// 이 라우터는 요청이 들어오면 'index'라는 뷰 템플릿을 렌더링하고, 객체를 전달하여 템플릿에 데이터를 전달
// pageName은 템플릿에서 사용할 수 있는 변수이며, 
// 템플릿에서 페이지 이름 또는 템플릿 이름을 동적으로 결정할 때 사용될 수 있다.



module.exports = router;
