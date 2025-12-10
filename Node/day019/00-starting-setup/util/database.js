const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodeDB",
  password: "Bholenath@10",
});

module.exports = pool.promise();
