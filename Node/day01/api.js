var http = require("http");
let data = [
  { name: "Ram", age: "20", email: "ram@gmail.com" },
  { name: "Ram", age: "20", email: "ram@gmail.com" },
  { name: "Ram", age: "20", email: "ram@gmail.com" },
];
http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(3030);
