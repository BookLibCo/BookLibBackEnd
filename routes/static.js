var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.redirect('/index.html');
});

router.get('/index.html', function (req, res) {
    res.render('index', {
        title: '欢迎来到校园合伙人'
    });
});

// todo: 使用模版生成页面


module.exports = router;
