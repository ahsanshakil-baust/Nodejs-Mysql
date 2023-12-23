const express = require("express");
const cors = require("cors");
const postsRouter = require("./controllers/postsRoutes");

const app = express();

app.use(express.json());
app.use(cors());

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`Incoming ${req.method} request to ${req.url}`);
    next();
});

app.use("/", postsRouter);

app.listen(3030, () => {
    console.log("Server running...");
});
