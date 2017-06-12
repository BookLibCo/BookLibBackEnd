var conf = require('../conf/conf');
var Sequelize = require('sequelize');

var db={};

var sequelize = new Sequelize(conf.db.customize, conf.db.user, conf.db.password, {
    host:conf.db.host,
    dialect: 'mysql',
    pool:{
        max:5,
        min:0,
        idle:30000
    }
});

db.Sequelize = Sequelize;
db.sequelize =sequelize;

module.exports = db;
