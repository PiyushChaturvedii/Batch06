// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "nodeDB",
//   password: "Bholenath@10",
// });

// module.exports = pool.promise();

// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("nodeDB", "root", "Bholenath@10", {
//   host: "localhost",
//   dialect: "mysql",
// });

// module.exports = sequelize;

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://admin:1234@cluster0.xyefinb.mongodb.net/?appName=Cluster0"
  )
    .then((client) => {
      console.log("Mongo Connected");
      _db = client.db();
      callback(client);
    })
    .catch((err) => console.log(err));
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

// module.exports = mongoConnect;
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
