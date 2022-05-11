const bcrypt = require("bcryptjs/dist/bcrypt");
const express = require("express");
let router = express.Router();

// bắt đầu thử mã hoá bcrypt
let spice = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync('B4c0/\/', spice);
// kêt thúc thử mã hoá bcrypt

router.get('/', (req, res, next) => {
  res.send(`đầu vào mã hoá:${spice}, đầu ra mã hoá: ${hash}`)
})
module.exports = router;