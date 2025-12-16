// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "nodeDB",
//   password: "Bholenath@10",
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodeDB", "root", "Bholenath@10", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
