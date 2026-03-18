import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import connectDB from './lib/connectDB.js';
import dotenv from "dotenv"
dotenv.config()

const app = express();

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

// app.get("/test", (req, res) => {
//     res.status(200).send("It works!")
// })

// app.get("/write", (req, res) => {
//     res.status(200).send("Write test")
// })


app.listen(3000, () => {
    connectDB();
    console.log("Server is running!")
})