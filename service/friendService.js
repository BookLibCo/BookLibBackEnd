var Friend = require('../models/friend');

module.exports = {
    // 添加好友
    //
    // id1 和id2是两个用户的id
    // 双向添加好友
    createFriend: function createFriend(id1, id2, failure, success) {
        var fun1 = Friend.create({
            userId1: id1,
            userId2: id2
        });

        var fun2 = Friend.create({
            userId1: id2,
            userId2: id1
        });

        Promise.all([fun1, fun2])
            .on('success', success)
            .on('failure', failure);
    },

    // 删除好友
    //
    // id1 和id2是两个用户的id
    // 双向删除好友
    deleteFriend: function deleteFriend(id1, id2, failure, success) {
        var fun1 = Friend.destroy({
            where: {
                userId1: id1,
                userId2: id2
            }
        });

        var fun2 = Friend.destroy({
            where: {
                userId1: id2,
                userId: id1
            }
        });

        Promise.all([fun1, fun2])
            .on('success', success)
            .on('failure', failure);
    },

    // 获取好友列表
    //
    // id1 用户id
    // 返回Array对象
    findFriends: function findFriends(id1, failure, success) {
        Friend.findAll({
            attribute: ['userId2'],
            where: {
                userId1: id1
            }
        })
            .on('success', success)
            .on('failure', failure);
    }
};