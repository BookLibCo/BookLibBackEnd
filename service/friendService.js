var Friend = require('../models/friend');

module.exports = {
    // 添加好友
    //
    // id1 和id2是两个用户的id
    // 双向添加好友
    createFriend: function createFriend(id1, id2) {
        var fun1 = Friend.eCreate({
            userId1: id1,
            userId2: id2
        });

        var fun2 = Friend.eCreate({
            userId1: id2,
            userId2: id1
        });

        return Promise.all([fun1, fun2]);
    },

    // 删除好友
    //
    // id1 和id2是两个用户的id
    // 双向删除好友
    deleteFriend: function deleteFriend(id1, id2) {
        var fun1 = Friend.eDestroy({
            where: {
                userId1: id1,
                userId2: id2
            }
        });

        var fun2 = Friend.eDestroy({
            where: {
                userId1: id2,
                userId: id1
            }
        });

        return Promise.all([fun1, fun2]);
    },

    // 获取好友列表
    //
    // id1 用户id
    // 返回Array对象
    findFriends: function findFriends(id1) {
        return Friend.eFindAll({
            attribute: ['userId2'],
            where: {
                userId1: id1
            }
        });
    },

    // 判断用户A是否有用户id2这个朋友
    //
    // id1 用户A
    // id2 用户B
    // 返回true或false
    isFriend: function isFriend(id1, id2) {
        return Friend.eFindAll({
            attribute: ['userId2'],
            where: {
                userId1: id1
            }
        }).then(function (result) {
            for (var i = 0; i < result.length; i++) {
                if (id2 == result[i].userId2) {
                    return true;
                }
            }
            return false;
        });
    }
};