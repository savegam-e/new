const express = require("express");
const router = express.Router();
let moment = require('moment')
const pool = require("../common/database")

router.get("/", function (req, res) {
	pool.connect(function (err, client, done) {
		if (err) {
			return console.error('loi ket noi database ', err);
		}
		let query1 = "select * from sinhvien"
		client.query(query1, function (err, result) {
			done();
			if (err) {
				res.send("Có lỗi hệ thống xảy ra: " + err.message)
				return console.error('loi truy van', err.message);
			}
			if (result != undefined) {
				console.log(result)
				res.render("./sinhvien", { sinhvien: result, moment })
			} else {
				res.send("Không thấy kết quả")
			}
		});
	});

});

module.exports = router;