const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const session      = require('express-session');
const bodyParser   = require('body-parser');

const static      = require('./routes/static');
const users       = require('./routes/user');
const requirement = require('./routes/requirement');
const message     = require('./routes/message');

const app = express();

const tool = require('./middleware/tool');

// string format
tool.stringFormat();
app.use(tool.extendModel);

//设置跨域访问
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
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
const middleware    = require('./middleware/middleware');
const auth          = middleware.auth;
const sessionRouter = require('./routes/session');

app.use(auth.completeCheck);
app.use(middleware.error.error);
app.use(middleware.render.resolveRender);

app.use('/', static);
app.use('/ses', sessionRouter);
app.use('/user', users);
app.use('/req', requirement);
app.use('/msg', message);
// todo 测试时不需检查登录，部署时添加
// app.use('/user', auth.loginCheck, users);
// app.use('/require', auth.loginCheck, require);
// app.use('/message', auth.loginCheck, message);

// 数据库错误处理

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	let err    = new Error('Not Found');
	err.status = 404;
	next(err);
});

// 自定义 error handler
const error = require('./middleware/error');
app.use(error.databaseErr);

// 最后的错误处理, express生成
// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error   = req.app.get('env') === 'development' ? err : {};
	
	// render the error page
	res.status(err.status || 500);
	res.render('error');
});


module.exports = app;
