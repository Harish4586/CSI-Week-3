//older version using callbacks->




const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 5001;
const filePath = path.join(__dirname, "sample.txt");
const htmlPath = path.join(__dirname, "index.html");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  
  if (url === "/" && method === "GET") {
    fs.readFile(htmlPath, (err, data) => {
      if (err) {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("html file was not found: index.html");
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    });
  } 
  
  
  else if (url === "/create" && method === "GET") {
    fs.writeFile(
      filePath,
      "Hello, this is a sample file created by Harish (CT_CSI_NJ_830)",
      (err) => {
        if (err) {
          res.writeHead(500);
          res.end("Error creating file!!");
        } else {
          res.writeHead(200);
          res.end("File created successfully as sample.txt");
        }
      }
    );
  }
  
  
  else if (url === "/read" && method === "GET") {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("File Not Found!!");
      } else {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end(data);
      }
    });
  } 
  
  
  else if (url === "/delete" && method === "GET") {
    fs.unlink(filePath, (err) => {
      if (err) {
        res.writeHead(404);
        res.end("File Not Found or already deleted !");
      } else {
        res.writeHead(200);
        res.end("File Deleted Successfully");
      }
    });
  }
  
  else {
    res.writeHead(404);
    res.end("Invalid Route");
  }
});

server.listen(port, function (err) {
  if (err) {
    console.log("Something went wrong!!", err);
  } else {
    console.log("Server is running on port " + port);
  }
});



/*
file manager funtionalities

1> Homepage 
when a user visits root route , he/she can see basic html page and they can access various
file management things using routes /create , /read,  /delete.


2> /create

when visited /create then it creates a sample file named sample.txt with some 
sample content using fs.writeFile method

3> /read

when visited /read then it reads file named sample.txt with some 
sample content using fs.readFile method and returns it as a plain text

4> /delete

when visited ,it deletes the file named sample.txt if exits using fs.unlink


NOTE: this application doesn't use any extenal liberaries and just uses core modules(http,path,fs)
      to build a lightweight yet functional file manager



#### HOW TO RUN  ####

firstly install nodemon globally by using command npm install nodemon -g  (helps in automatic restarting the server when anything changes)

then run command ------>>>>    "npm run dev"

*/