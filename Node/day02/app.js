const http = require("http");
const fs = require("fs");
// function rqListener(req, res) {}

// http.createServer(rqListener);

// http.createServer(function (req, res) {});

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   console.log("request url: ", req.url);
  //   console.log("request Method: ", req.method);
  //   console.log("request Headers: ", req.headers);
  //   process.exit()

  const url = req.url;
  const method = req.method;
  console.log(url);
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Form Input</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text"/><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("file.txt", "This file create by Nodejs Server");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title> Node JS</title></head>");
  res.write("<body><h1>Jai Shree Ram</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3030);
