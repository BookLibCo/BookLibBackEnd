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
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//统一post和get的参数位置
app.use(tool.reqParams);

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

app.use(auth.completeCheck);
app.use(middleware.error.error);
app.use(middleware.render.resolveRender);

app.use('/', static);
app.use('/user', auth.loginCheck, users);
app.use('/request', auth.loginCheck, request);
app.use('/message', auth.loginCheck, message);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	
	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
