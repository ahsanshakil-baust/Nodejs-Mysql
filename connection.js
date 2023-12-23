const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ahsan075@",
    database: "postApp",
});

// connection.connect((err) => {
//   if (!err) {
//     console.log("Database Connected");
//     const query = "CREATE DATABASE postApp";
//     connection.query(query, (err) => {
//       if (!err) {
//         console.log("Database Created");
//       } else console.log("Already Database Exist");
//       const query =
//         "CREATE TABLE posts (title VARCHAR(255), desc VARCHAR(255))";
//       connection.query(query, (err) => {
//         if (!err) console.log("Table Created");
//         else console.log("Already Table Exist");
//       });
//     });
//   } else console.log("Not Connected");
// });

// module.exports = connection;

connection.connect((err) => {
    if (!err) {
        console.log("Database Connected");
        createDatabaseAndTable()
            .then(() => {
                console.log("Initialization completed.");
            })
            .catch((error) => {
                console.error("Initialization failed:", error);
            });
    } else {
        console.error("Connection error:", err);
    }
});

function createDatabaseAndTable() {
    return new Promise((resolve, reject) => {
        connection.query("CREATE DATABASE IF NOT EXISTS postApp", (err) => {
            if (err) {
                reject("Database creation failed: " + err.message);
            } else {
                console.log("Database created or already exists");
                connection.query("USE postApp", (err) => {
                    if (err) {
                        reject("Database selection failed: " + err.message);
                    } else {
                        connection.query(
                            "CREATE TABLE IF NOT EXISTS posts (id INT AUTO_INCREMENT PRIMARY KEY,title VARCHAR(255), `desc` VARCHAR(255))",
                            (err) => {
                                if (err) {
                                    reject(
                                        "Table creation failed: " + err.message
                                    );
                                } else {
                                    console.log(
                                        "Table created or already exists"
                                    );
                                    resolve();
                                }
                            }
                        );
                    }
                });
            }
        });
    });
}

module.exports = connection;
