var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Message = require('../models/message');
var Requirement = require('../models/requirement');
var Tag = require('../models/tag');

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
