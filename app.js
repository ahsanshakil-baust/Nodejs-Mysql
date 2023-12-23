const connection = require("./connection");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`Incoming ${req.method} request to ${req.url}`);
    next();
});

// Add Post
// app.post("/add-post", (req, res) => {
//   const { title, desc } = req.body;
//   const postData = { title, desc };

//   const query = "INSERT INTO posts SET ?";
//   connection.query(query, postData, (err, result) => {
//     if (!err) {
//       res.json(200, {
//         msg: "Post Inserted Successfully",
//         data: result,
//       });
//     } else {
//       res.json(500, {
//         errmsg: "Post Can't add due to server error",
//       });
//     }
//   });
// });

// Route to handle adding a post
app.post("/add-post", async (req, res) => {
    try {
        const { title, desc } = req.body;
        // Validate inputs if needed

        // Create a prepared statement with placeholders
        const query = `INSERT INTO posts (title, \`desc\`) VALUES (?, ?)`;

        const values = [title, desc];

        // Execute the query using prepared statement
        await connection.promise().execute(query, values);

        res.status(200).json({
            msg: "Post Inserted Successfully",
        });
    } catch (err) {
        res.status(500).json({
            errMsg: err.message,
        });
    }
});

app.get("/", async (req, res) => {
    try {
        const query = "SELECT * FROM posts";

        await connection.execute(query, (err, results) => {
            if (!err)
                res.status(200).json({
                    data: results,
                });
            else
                res.status(402).json({
                    errMsg: err.message,
                });
        });
    } catch (err) {
        res.status(500).json({
            errMsg: "Internal server error occurred.",
        });
    }
});

app.patch("/update-post", async (req, res) => {
    try {
        const { id, title, desc } = req.body;

        const query = `UPDATE posts SET title = ?, \`desc\` = ? WHERE id = ${id}`;

        const values = [title, desc];

        await connection.promise().execute(query, values);

        res.status(200).json({
            msg: "Post Updated Successfully",
        });
    } catch (err) {
        res.status(500).json({
            errMsg: err.message,
        });
    }
});

app.delete("/delete-post", async (req, res) => {
    try {
        const { id } = req.body;
        const query = `DELETE FROM posts WHERE id = ${id}`;
        await connection.promise().execute(query);

        res.status(200).json({
            msg: "Post Deleted Successfully",
        });
    } catch (err) {
        res.status(500).json({
            errMsg: err.message,
        });
    }
});

app.listen(3030, () => {
    console.log("Server running...");
});
