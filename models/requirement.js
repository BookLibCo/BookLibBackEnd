var db = require('../db/sequelize');

var Requirement = db.sequelize.define('requirement', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        description: '自增 创建时无需赋值'
    },
    user: {
        type: db.Sequelize.INTEGER,
        description: '需求提出人的ID',
        allowNull: false
    },
    title: {
        type: db.Sequelize.STRING(20),
        description: '需求标题',
        allowNull: false
    },
    tags: {
        type: db.Sequelize.STRING(20),
        description: '需求标签 1&2&3这样的形式',
    },
    content: {
        type: db.Sequelize.STRING(100),
        description: '需求内容',
        allowNull: false
    },
    state: {
        type: db.Sequelize.CHAR(1),
        description: '状态 已发送 已接收等 具体再细化'
    }
}, {
    freezeTableName: true
});

db.sequelize.sync().then(function(){
    console.log("Sync Success");
});


module.exports = Requirement;