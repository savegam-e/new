const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('dropzone')
})

router.post('/upload', (req, res, next) => {
    console.log('dropzone upload: ', req)
    next();
})

module.exports = router