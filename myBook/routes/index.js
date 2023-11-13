var express = require('express');
var router = express.Router();


// '/' 경로에 대한 GET 요청을 처리하는 라우터가 정의
router.get('/', function(req, res, next) {
  res.render('index', { title: '도서관리시스템' , pageName:"home.ejs"});
});
//  function(req, res, next) 이 함수는 / 경로에 대한 HTTP GET 요청이 들어올 때 실행된다.
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인' , pageName: "auth/login.ejs"});
});

router.get('/join', function(req, res, next) {
  res.render('index', { title: '회원가입' , pageName: "auth/join.ejs"});
});


router.get('/board/board/', function(req, res, next) {
  res.render('index', { title: '게시판' , pageName: "board/board.ejs"});
});

// 이 라우터는 요청이 들어오면 'index'라는 뷰 템플릿을 렌더링하고, 객체를 전달하여 템플릿에 데이터를 전달
// pageName은 템플릿에서 사용할 수 있는 변수이며, 
// 템플릿에서 페이지 이름 또는 템플릿 이름을 동적으로 결정할 때 사용될 수 있다.
// router.get('/bookList', function(req, res, next) {
//   res.render('index', { title: '리스트' , pageName: "book/bookList.ejs"});
// });


//========================================================================================



router.get('/board/write/', function(req, res, next) {//app.js -> path 라이브러리 __dirname, views
  res.render('index', { title: '글쓰기',  pageName: "board/write.ejs" });
});

router.get('/board/read/', function(req, res, next) {//app.js -> path 라이브러리 __dirname, views
  let index = req.params.index;
  res.render('index', { title: '상세보기',  pageName: "board/read.ejs"});
}); 

router.get('/board/modify/', function(req, res, next) {//app.js -> path 라이브러리 __dirname, views
  res.render('index', { title: '수정하기',  pageName: "board/modify.ejs"});
}); 



module.exports = router;
