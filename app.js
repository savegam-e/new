require('dotenv').config()
const port = process.env.PORT
process.env.SUPPRESS_NO_CONFIG_WARNING = 'y'
let bodyParser = require('body-parser');
var express = require("express");
let flash = require('connect-flash');
let cookieParser = require('cookie-parser');
let session = require('express-session');
var app = express();

//connect-flash config
app.use(cookieParser('keyboard cat'));
app.use(session({
  secret: 'keybroard cat',  
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000,
  }
}));
app.use(flash());
//connect-flash end config

// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 

// // parse application/json
app.use(bodyParser.json()) 

app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/public"))
var controllers = require(__dirname + "/apps/controllers")

app.use(controllers);
app.listen(port, () => {
  console.log(`av-pms app listening at http://localhost:${port}`)
})