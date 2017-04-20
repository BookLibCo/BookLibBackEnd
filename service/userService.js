var User = require('../models/user');

module.exports = {
    createUser: function createUser(user) {
        return User.create({
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
        });
    },

    updateUser: function updateUser(user) {
        return User.update({
                // 具体更新的属性再说
            },
            {
                where: {
                    // 限定的范围
                }
            });
    },

    findUser: function findUser(need, query) {
        return User.findOne({
            attribute: need,
            where: query
        });
    },

    findUsers: function findUsers(need, query) {
        return User.findAll({
            attribute: need,
            where: query
        });
    }
};

