const connection = require("./connection");

connection.connect((err) => {
  if (!err) console.log("Connected");
  else console.log("Not Connected");
});
