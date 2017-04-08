/**
 * Created by zhy on 2017/3/16.
 */
var mysql = require('mysql');

var pool = mysql.createPool({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: '5898zHy1627',
	db: 'Cooperator',
	charset: 'UTF8_BIN',
	dateStrings: true,
	multipleStatements: true
});

var query = function (sql, callBack) {
	pool.getConnection(function (err, conn) {
		if (err) {
			callBack(err, null, null);
			return;
		}
		
		conn.query(sql, function (qerr, vals, fields) {
			conn.release();
			callBack(qerr, vals, fields);
		})
	})
};

module.exports = query;