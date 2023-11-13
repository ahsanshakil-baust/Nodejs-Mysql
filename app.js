const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 5000,
  user: "root",
  password: "Ahsan075@",
  database: "user",
});

connection.connect((err) => {
  if (!err) console.log("Connected");
  else console.log("Not Connected");
});
