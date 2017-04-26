var db = require('../db/sequelize');

var Requirement = db.sequelize.define('requirement', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        description: '自增 创建时无需赋值'
    },
    ownerId: {
        type: db.Sequelize.INTEGER,
        description: '需求提出人的ID',
        allowNull: false
    },
    ownerDesc: {
        type: db.Sequelize.STRING(20),
        description: '需求提出人描述 例 清华大学软件学院某某教授',
        allowNull:false
    },
    avatar: {
        type: db.Sequelize.STRING(40),
        description: '需求图片存储路径 例 清华大学老师就直接放logo好了',
        allowNull:false
    },
    title: {
        type: db.Sequelize.STRING(20),
        description: '需求标题',
        allowNull: false
    },
    tag: {
        type: db.Sequelize.STRING(20),
        description: '需求标签',
        allowNull:false
    },
    content: {
        type: db.Sequelize.STRING(100),
        description: '需求内容',
        allowNull: false
    },
    acceptorId: {
        type:db.Sequelize.INTEGER,
        description: '需求接受人的ID',
    },
    state: {
        type: db.Sequelize.CHAR(1),
        description: '状态 具体再细化'
    }
}, {
    freezeTableName: true
});

db.sequelize.sync().then(function(){
    console.log("Sync Success");
});


module.exports = Requirement;