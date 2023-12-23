const express = require("express");
const router = express.Router();
const connection = require("../connection");

// Add Post
router.post("/add-post", async (req, res) => {
    try {
        const { title, desc } = req.body;
        const query = `INSERT INTO posts (title, \`desc\`) VALUES (?, ?)`;

        const values = [title, desc];
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

// Get all posts
router.get("/", async (req, res) => {
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

// Update Post
router.patch("/update-post", async (req, res) => {
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

// Delete Post
router.delete("/delete-post", async (req, res) => {
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

module.exports = router;
