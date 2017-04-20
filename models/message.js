var db = require('../db/sequelize');

var Message = db.sequelize.define('message', {
    id:{
        type:db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        description: '自增 创建时无需赋值'
    },
    from:{
        type:db.Sequelize.INTEGER,
        description:'发送方id',
        allowNull: false
    },
    to:{
        type:db.Sequelize.INTEGER,
        description:'接收方id',
        allowNull: false
    },
    content:{
        type:db.Sequelize.STRING(100),
        allowNull:false
    },
    state:{
        type:db.Sequelize.CHAR(1),
        description:'状态 已发送 未读等 具体再细化'
    }
}, {
    freezeTableName: true
});


module.exports = Message;