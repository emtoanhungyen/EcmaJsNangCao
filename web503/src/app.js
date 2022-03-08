const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const checkAuth = (req, res, next) => {
    const isAdmin = true;
    if (isAdmin) {
        next();
    } else {
        console.log("KUT NGAY");
    }
};

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});
app.get("/products", checkAuth, (req, res) => {
    const data = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
    ];
    res.json(data);
});

// const http = require("http");

// const server = http.createServer((req, res) => {
//     const { url } = req;
//     console.log(url);
//     if (url === "/products") {
//         const data = [
//             { id: 1, name: "Product A" },
//             { id: 2, name: "Product B" },
//         ];
//         res.end(JSON.stringify(data));
//     } else if (url === "/post") {
//         console.log("API Post");
//     } else {
//         res.setHeader("Content-type", "text/html");
//         res.write("<html><body> <h2>Home page</h2> </body></html>");
//         res.end();
//     }
// });

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng: ", PORT);
});