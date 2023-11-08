
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//__dirname은 현재 디렉토리를 의미하며 path.join()함수는 경로를 연결하는 기능
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //템플릿엔진의 종류

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//정적페이지의 물리적인 위치를 설정함

// 라우트 코드를 로딩하는 코드
app.use('/', indexRouter);
//'/'와 관련된 라우트는 routes폴더의 index파일에 설정된 라우트 함수를 통해 처리됨
app.use('/users', usersRouter);
// '/users'와 관련된 라우트는 users파일에 작성된 라우트 함수를 통해 처리됨

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
