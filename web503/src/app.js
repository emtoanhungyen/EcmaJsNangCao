// const express = require('express');
import express from "express";
import cors from "cors";
// eslint-disable-next-line import/no-extraneous-dependencies
import morgan from "morgan";
import mongoose from "mongoose";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
import productRoute from "./routes/product";
import userRoute from "./routes/user";
import newRoute from "./routes/new";
import categoryRoute from "./routes/category";

const app = express();
const swaggerJSDocs = YAML.load("./api.yaml");
// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));

// routes
app.use("/api", productRoute);
app.use("/user", userRoute);
app.use("/new", newRoute);
app.use("/api", categoryRoute);

// readdirSync(`${__dirname}/routes`).forEach((fileName) => {
//     import(`./routes/${fileName}`)
//         .then(({ default: router }) => router.default)
//         .then((router) => {
//             app.use("/api", router);
//         });
// });

// connection db
mongoose.connect("mongodb://localhost:27017/we16310")
    .then(() => console.log("Ket noi db thanh cong"))
    .catch((error) => console.log(error));
// connect
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng ", PORT);
});