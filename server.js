const express = require("express");
const { connectMongoDb } = require("./crud/dbConnection");
const logReqRes = require("./crud/middleware/logReqRes");
const router = require("./crud/routes/userRoute");

const app = express();

// DB connection
connectMongoDb();

// Middleware - pasres only urlencoded bodies from request
app.use(express.urlencoded({ extended: false }));

// Middleware - to create log
app.use(logReqRes("log.txt"));

// Routes
app.use("/api", router);

app.listen(8000, () => console.log("Server Started!"));
