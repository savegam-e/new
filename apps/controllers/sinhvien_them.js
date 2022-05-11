let express = require('express');
let router = express.Router();
let moment = require('moment');
const pool = require("../common/database")

router.get('/', (req, res, next) => {
	res.render('sinhvien_them')
})

router.post('/', (req, res, next) => {
    pool.connect(function (err, client, done) {
		if (err) {
			return console.error('loi ket noi database ', err);
		}
		let query1 = `insert into sinhvien (hoten, email, "timeChange") values ('${req.body.tensinhvien}', '${req.body.email}', '${moment().format('YYYY-MM-DD HH:mm:s')}');`
		client.query(query1, function (err, result) {
			done();
			if (err) {
				res.send("Có lỗi hệ thống xảy ra: " + err.message)
				return console.error('loi truy van', err.message);
			}
			if (result != undefined) {
				res.redirect('/sinhvien')
			} else {
				res.send("Không thấy kết quả")
			}
		});
	});
})
module.exports = router