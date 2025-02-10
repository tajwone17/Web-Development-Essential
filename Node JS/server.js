const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the homepage");
  } else if (req.url === "/about") {
    res.end("About us page here");
  } else {
    res.writeHead(404);
    res.end("page not found");
  }
});
server.listen(3000, () => {
  console.log("Server is running");
});
