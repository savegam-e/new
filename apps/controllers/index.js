
var express = require("express");
var router = express.Router();

router.use("/login", require(__dirname + "/login"));
router.use("/produc", require(__dirname + "/produc"));
router.use("/sinhvien", require(__dirname + "/sinhvien"));
router.use("/bodyParser", require(__dirname + "/bodyParser"));
router.use("/config", require(__dirname + "/config"));
router.use("/connectFlash", require(__dirname + "/connectFlash"));
router.use("/bcrypt", require(__dirname + "/bcrypt"));
router.use("/moment", require(__dirname + "/moment"));
router.use("/dropzone", require(__dirname + "/dropzone"));
router.use("/multer", require(__dirname + "/multer"));
router.use("/sinhvien/sua", require(__dirname + "/sinhvien_sua"));
router.use("/sinhvien/them", require(__dirname + "/sinhvien_them"));
router.use("/sinhvien/xoa", require(__dirname + "/sinhvien_xoa"));

router.get('/', (req, res, next) => {
    res.render('trangchu')
})

module.exports = router;