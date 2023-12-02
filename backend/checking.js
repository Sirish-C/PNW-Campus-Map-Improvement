var mysql = require('mysql');
var con = mysql.createConnection({
    host: "104.194.77.119",
    port:3306,
    user: "admin",
    password: "Nggyu1(((",
    database: "pnwcampusmap"
  });

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM building;", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});