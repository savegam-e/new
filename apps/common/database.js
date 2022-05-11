var pg = require('pg');
//khai báo biến config

var config = {
  user: process.env.postgres_user, // name of the user account
  database: process.env.postgres_database, // name of the database
  password: process.env.postgres_password,
  host: process.env.postgres_host,
  port: process.env.postgres_port,
  max: process.env.postgres_max, // max number of clients in the pool
  idleTimeoutMillis: process.env.postgres_idleTimeoutMillis // how long a client is allowed to remain idle before being closed
}
// //khai báo biến pool
var pool = new pg.Pool(config)
module.exports = pool;
