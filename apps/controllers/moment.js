const express = require('express');
const router = express.Router();
let moment = require('moment');

router.get('/', (req, res, next) => {
    res.send(`Ngày hôm nay là: ${moment().format('YYYY-MM-DD H:M:S')}`)
})

module.exports = router