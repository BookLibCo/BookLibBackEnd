/**
 * Created by zhy on 2017/4/9.
 */
var Sequelize = require('sequelize');

var db = new Sequelize('mysql://root:5898zHy1627@localhost:3306/Cooperator');

var User = db.define('user', {
	id: {
		type: Sequelize.INTEGER,
		field: 'id',
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING,
		field: 'name'
	},
	password: {
		type: Sequelize.STRING,
		field: 'password'
	},
	email: {
		type: Sequelize.STRING,
		field: 'email'
	},
	phone: {
		type: Sequelize.STRING,
		field: 'phone'
	},
	creditable: {
		type: Sequelize.INTEGER,
		field: 'creditable'
	}
}, {
	freezeTableName: true, // Model tableName will be the same as the model name
	timestamps: false
});
