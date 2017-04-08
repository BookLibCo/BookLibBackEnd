/**
 * Created by zhy on 2017/4/8.
 */
var express = require('express');
var router = express.Router();

//添加需求
router.get('/', function (req, res, next) {
	res.redirect('../index.html');
});

router.post('/add.service', function (req, res, next) {
	next();
});

router.post('/list.service', function (req, res, next) {

});

router.get('/conditions.service', function (req, res, next) {
	res.send('1');
});

router.post('/search.service', function (req, res, next) {
	next();
});

router.post('/one.service', function (req, res, next) {
	next();
});

router.post('/judge.service', function (req, res, next) {
	next();
});

router.post('/change.service', function (req, res, next) {
	next();
});

router.post('/fire.service', function (req, res, next) {
	next();
});

router.post('/cancel.service', function (req, res, next) {
	next();
});

module.exports = router;