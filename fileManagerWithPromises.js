//Kindly go through readme.md for explanation of using async await instead of callbacks



const http = require("http");
const fs = require("fs/promises");
const path = require("path");

const port = 5001;
const filePath = path.join(__dirname, "sample.txt");
const htmlPath = path.join(__dirname, "index.html");

const server = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;

  try {
    if (url === "/" && method === "GET") {
      const data = await fs.readFile(htmlPath);
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    } 
    
    else if (url === "/create" && method === "GET") {
      await fs.writeFile(
        filePath,
        "Hello, this is a sample file created by Harish (CT_CSI_NJ_830)"
      );
      res.writeHead(200);
      res.end("File created successfully as sample.txt");
    }
    
    else if (url === "/read" && method === "GET") {
      const data = await fs.readFile(filePath, "utf8");
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(data);
    } 
    
    else if (url === "/delete" && method === "GET") {
      await fs.unlink(filePath);
      res.writeHead(200);
      res.end("File Deleted Successfully");
    } 
    
    else {
      res.writeHead(404);
      res.end("Invalid Route");
    }
  }
  
  catch (err) {
    // Error handling for file not found, access denied, etc.
    console.error("Error:", err.message);
    res.writeHead(500, { "content-type": "text/plain" });
    res.end(`Server Error: ${err.message}`);
  }
});

server.listen(port, (err) => {
  if (err) {
    console.error("Server error:", err);
  } else {
    console.log("Server is running on port " + port);
  }
});
