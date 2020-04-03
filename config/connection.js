// Set up MySQL connection.
var mysql = require("mysql");
if(process.env.NODE_ENV === "production"){
  var connection = mysql.createConnection(process.env.JAWSDB);
} 
else{
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "sqlroot321",
  database: "burgers_DB"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
