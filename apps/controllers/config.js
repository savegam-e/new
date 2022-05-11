let express = require('express');
let router = express.Router();

let config = require('config');
config.Customer.dbConfig.hos = "asdf"

console.log(config.Customer.dbConfig.host)

let dbConfig = config.get('Customer.dbConfig');

router.get('/', (req, res, next) => {    
    res.send(dbConfig)
    next()
})

module.exports = router