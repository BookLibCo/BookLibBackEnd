var User = require('../models/user');

module.exports = {
    createUser: function createUser(user, failure, success) {
        User.create({
            username: user.username,
            password: user.password,
            avatar: user.avatar,
            phone: user.phone,
            email: user.email,
            idcard: user.idcard,
            idcardfrontpic: user.idcardfrontpic,
            idcardbackpic: user.idcardbackpic,
            identity: user.identity,
            state: user.state,
            credit: user.credit,
            tags: user.tags,
            school: user.school,
            discipline: user.discipline,
            experience: user.experience,
            introduction: user.introduction
        })
	        .on('success', success)
	        .on('failure', failure);
    },

    updateUser: function updateUser(user, failure, success) {
        User.update({
                // 具体更新的属性再说
            },
            {
                where: {
                    // 限定的范围
                }
            })
	        .on('success', success)
	        .on('failure', failure);
    },

    findUser: function findUser(need, query, failure, success) {
        User.findOne({
            attribute: need,
            where: query
        })
	        .on('success', success)
	        .on('failure', failure);
    },

    findUsers: function findUsers(need, query, failure, success) {
        User.findAll({
            attribute: need,
            where: query
        })
	        .on('success', success)
	        .on('failure', failure);
    }
};

