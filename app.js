const connection = require("./connection");
const express = require("express");

const app = express();

app.use(express.json());

// Add Post
app.post("/add-post", (req, res) => {
  const { title, desc } = req.body;
  const postData = { title, desc };

  const query = "INSERT INTO posts SET ?";
  connection.query(query, postData, (err, result) => {
    if (!err) {
      res.json(200, {
        msg: "Post Inserted Successfully",
        data: result,
      });
    } else {
      res.json(500, {
        errmsg: "Post Can't add due to server error",
      });
    }
  });
});

app.listen(6000, () => {
  console.log("Server running...");
});
