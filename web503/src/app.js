const http = require("http");

const server = http.createServer((req, res) => {
    const { url } = req;
    console.log(url);
    if (url === "/products") {
        const data = [
            { id: 1, name: "Product A" },
            { id: 2, name: "Product B" },
        ];
        res.end(JSON.stringify(data));
    } else if (url === "/post") {
        console.log("API Post");
    } else {
        res.setHeader("Content-type", "text/html");
        res.write("<html><body> <h2>Home page</h2> </body></html>");
        res.end();
    }
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng: ", PORT);
});