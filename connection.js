const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ahsan075@",
});

connection.connect((err) => {
    if (!err) {
        console.log("Database Connected");
        const query = "CREATE DATABASE postApp";
        connection.query(query, (err) => {
            if (!err) {
                console.log("Database Created");
                const query =
                    "CREATE TABLE posts (title VARCHAR(255), desc VARCHAR(255))";
                connection.query(query, (err) => {
                    if (!err) console.log("Table Created");
                });
            } else console.log("Already Exist");
        });
    } else console.log("Not Connected");
});

module.exports = connection;
