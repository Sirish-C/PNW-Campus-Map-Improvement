var mysql = require('mysql');

console.log("Testing")
var con = mysql.createConnection({
  host: "104.194.77.119",
  port:3306,
  user: "admin",
  password: "Nggyu1((("
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});