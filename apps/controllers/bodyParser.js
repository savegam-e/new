const express = require("express");
let router = express.Router();

// // parse routerlication/x-www-form-urlencoded
// router.use(bodyParser.urlencoded({ extended: false })) 

// // parse routerlication/json
// router.use(bodyParser.json()) 

// router.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')  
//   res.write('you posted:\n')  
//   res.end(JSON.stringify(req.body, null, 2))
// })
router.get('/', (req, res) => {
    res.render('bodyParser')
})
router.post('/t', (req, res, next) => {
  res.send(req.body)
  next()
})

module.exports = router;