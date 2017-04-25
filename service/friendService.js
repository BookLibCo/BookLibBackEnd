var Friend = require('../models/friend');

module.exports = {
    createFriend: function createFriend(friend) {
        return Friend.create({
            from: friend.from,
            to: friend.to,
            content: friend.content,
            state: friend.state
        });
    },

    updateFriend: function updateFriend(friend) {
        return Friend.update({
                // 具体更新的属性再说
            },
            {
                where: {
                    // 限定的范围
                }
            });
    }
};