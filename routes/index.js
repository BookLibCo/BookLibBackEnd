var express = require('express');
var router = express.Router();
var User = require('../module/user');
var Message = require('../module/message');
var Requirement = require('../module/requirement');
var Tag = require('../module/tag');

/* GET home page. */
router.get('/', function (req, res) {
    res.redirect('/index.html');
});

router.get('/index.html', function (req, res) {


    res.render('index', {
        title: '欢迎来到校园合伙人'
    });
});

module.exports = router;
