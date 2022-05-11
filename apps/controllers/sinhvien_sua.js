let express = require('express');
let router = express.Router()
let moment = require('moment')
const pool = require("../common/database")

router.get('/:id', (req, res, next) => {
    pool.connect(function (err, client, done) {
		if (err) {
			return console.error('loi ket noi database ', err);
		}
		let query1 = `select * from sinhvien where id=${req.params.id}`
		client.query(query1, function (err, result) {
			done();
			if (err) {
				res.send("Có lỗi hệ thống xảy ra: " + err.message)
				return console.error('loi truy van', err.message);
			}
			if (result != undefined) {
				console.log(result)
				res.render("./sinhvien_sua", { sinhvien: result })
			} else {
				res.send("Không thấy kết quả")
			}
		});
	});   
})

router.post('/:id', (req, res, next) => {
    pool.connect(function (err, client, done) {
		if (err) {
			return console.error('loi ket noi database ', err);
		}
		let query1 = `update sinhvien set hoten='${req.body.tensinhvien}', email='${req.body.email}', "timeChange"='${moment().format("YYYY-MM-DD HH:mm:ss")}' where id=${req.params.id}`
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