var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var static = require('./routes/static');
var users = require('./routes/user');
var request = require('./routes/request');
var message = require('./routes/message');

var app = express();

var tool = require('./middleware/tool');

// string format
tool.stringFormat();
app.use(tool.extendModel);

//设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	// res.header("X-Powered-By",' 3.2.1');
	// res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session
app.use(session({
	secret: 'Cooperator',
	cookie: {maxAge: 15 * 60 * 1000},   //session timeout: 15 min
	resave: false,
	saveUninitialized: true
}));

// refresh session
app.use(tool.refreshSession);

// routers
var middleware = require('./middleware/middleware');
var auth = middleware.auth;
var sessionRouter = require('./routes/session');

app.use(auth.completeCheck);
app.use(middleware.error.error);
app.use(middleware.render.resolveRender);

app.use('/', static);
app.use('/ses', sessionRouter);
app.use('/user', users);
app.use('/req', request);
app.use('/msg', message);
// todo 测试时不需检查登录，部署时添加
// app.use('/user', auth.loginCheck, users);
// app.use('/request', auth.loginCheck, request);
// app.use('/message', auth.loginCheck, message);

// 数据库错误处理

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
var error = require('./middleware/error');

app.use(error.serverError);

module.exports = app;
