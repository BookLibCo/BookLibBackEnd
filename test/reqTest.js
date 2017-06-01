var app = require('../app');
var request = require('supertest')(app);
var should = require("should");
var pedding = require('pedding');

describe('reqTest.js', function () {

    describe('add', function () {
        it('发布需求', function (done) {
            request.post('../routes/req/add.service')
                .send({
                    ownerId: 1,
                    ownerDesc: '需求发布人的描述',
                    avatar: '需求发布人的头像链接',
                    title: '需求标题',
                    tag: '标签1&标签2',
                    content: '需求具体内容',
                })
                .expect(200, function (err, res) {
                    should.not.exist(err);
                    done();
                })
        });
    });

    describe('list', function () {
        it('查找需求', function (done) {
            request.get('../routes/req/list.service')
                .send({
                    // 先根据ownerId来查询
                    ownerId: 1
                })
                .expect(200, function (err, res) {
                    should.not.exist(err);
                    done();
                })
        })
    });

    describe('one', function () {
        it('根据 id 获得需求详细信息', function (done) {
            request.get('../routes/req/one.service')
                .send({
                    id: 1
                })
                .expect(200, function (err, res) {
                    should.not.exist(err);
                    done();
                })
        })
    });

    describe('update', function () {
        it('更改需求内容', function (done) {
            request.get('../routes/req/update.service')
                .send({
                    id: 1,
                    content: 'new content'
                })
                .expect(200, function (err, res) {
                    should.not.exist(err);
                    done();
                })
        })
    });

    describe('accept', function () {
        it('对需求进行投标', function (done) {
            request.get('../routes/req/accept.service')
                .send({
                    id: 1
                })
                .expect(200, function (err, res) {
                    should.not.exist(err);
                    done();
                })
        })
    });

    describe('fire', function () {
        it('解除合作关系', function (done) {
            request.get('../routes/req/accept.service')
                .send({
                    id: 1,
                    reason: '因为不可抗拒的因素终止合作'
                })
                .expect(200, function (err, res) {
                    should.not.exist(err);
                    done();
                })
        })
    });

    describe('delete', function () {
        it('取消(删除)已发布的需求系', function (done) {
            request.get('../routes/req/delete.service')
                .send({
                    id: 1
                })
                .expect(200, function (err, res) {
                    should.not.exist(err);
                    done();
                })
        })
    });
});