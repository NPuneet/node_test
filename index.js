const express = require("express");

const userRouter = require("./routes/user");
const { connectMongoDB } = require("./connection");
const { logReqRes } = require("./middlewares");
const app = express();
const port = 3000;

//connection
connectMongoDB("mongodb://127.0.0.1:27017/userData");

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

//Router
app.use("/api/user", userRouter);
app.listen(port, () => console.log("server is listening"));
