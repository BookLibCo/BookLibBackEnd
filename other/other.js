/**
 * Created by zhy on 2017/5/29.
 */
exports.solveDBErr = function (err, msg) {
	err._message = err.message;
	err.message = msg + ', error: ' + err._message;
	err.database = true;
	return err;
};