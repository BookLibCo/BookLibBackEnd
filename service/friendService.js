var Friend = require('../models/friend');

module.exports = {
    createFriend: function createFriend(friend, failure, success) {
        Friend.create({
            from: friend.from,
            to: friend.to,
            content: friend.content,
            state: friend.state
        })
	        .on('success', success)
	        .on('failure', failure);
    },

    updateFriend: function updateFriend(friend, failure, success) {
        Friend.update({
                // 具体更新的属性再说
            },
            {
                where: {
                    // 限定的范围
                }
            })
	        .on('success', success)
	        .on('failure', failure);
    }
};