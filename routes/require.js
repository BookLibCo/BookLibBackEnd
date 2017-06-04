/**
 * Created by zhy on 2017/4/8.
 */
const express = require('express');
const router = express.Router();

const $ = require('../controllers/controller').request;

router.route('/add.service')
    .post($.add);

// router.route('/list.service')
// 	.post($.list);

router.get('/list.service', function (req, res, next) {
    var requires = [
        {
            avatar: '/req/images/BAIDU.jpg',
            title: '标题',
            type: '大学生创业',
            ownerDesc: '小明',
            tags: '移动开发',
            content: '内容'
        }];
    res.locals.requires = requires;
    res.render('tab-webview-subpage-about');
})

router.route('/one.service')
    .post($.one);

router.route('/judge.service')
    .post($.judge);

router.route('/update.service')
    .post($.update);

router.route('/fire.service')
    .post($.fire);

router.route('/delete.service')
    .post($.delete);

router.route('/accept.service')
    .post($.accept);

module.exports = router;
