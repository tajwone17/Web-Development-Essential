const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Enter your MySQL password
  database: "formdb",
});
db.connect((err) => {
  if (err) throw error;
  console.log("Connected to database");
});
module.exports = db;
