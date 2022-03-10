// const express = require('express');
import express from "express";
import cors from "cors";
import morgan from "morgan";
import productRoute from "./routes/product";

const app = express();
// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// routes
app.use("/api", productRoute);

// connect
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng ", PORT);
});