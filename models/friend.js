var db = require('../db/sequelize');

var Friend = db.sequelize.define('friend', {
    id:{
        type:db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        description: '自增 创建时无需赋值'
    },
    link:{
        type:db.Sequelize.STRING,
        description:'id1&id2',
        allowNull: false
    }
}, {
    freezeTableName: true
});

db.sequelize.sync().then(function(){
    console.log("Sync Success");
});

module.exports = Friend;