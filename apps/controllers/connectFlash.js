let express = require('express');
let router = express.Router();

router.get('/flash', (req, res, next) => {
    req.flash('info', 'Flash is back')
    res.redirect('/connectFlash')
})
router.get('/', (req, res, next) => {
    res.send('đây là flash: '+ req.flash('info'))
})

module.exports = router