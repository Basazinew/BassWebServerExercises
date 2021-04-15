// const http = require("http");
// const url = require("url");  //to find/locate the path
// const fs = require("fs");   //to read the file
// const mimetypeLookup = require("mime-types").lookup; //used to display any type of files(html, css, js, ..)
// let server = http.createServer(function (req, res) {     //a server is created
//      //to serve the index.html by default
//     let parsedURL = url.parse(req.url, true);  // a line on parse method shows that the method is depretiated => meaning instead of using parse() method, there is an updated way
//     // const parsedPath = new URL(req.url, baseURL)  =>an other option to url.parse
//     let filePath = parsedURL.path;
//     if(filePath == "/") {
//         filePath = "/index.html";
//     }
//     //to locate the folder/project where all the files exist. 
//     var requestedFile = __dirname + "/../../../Phase\ 1/Week\ 5/Bootstrap/Apple\ Project/" + filePath;
//     const readFile = fs.readFile(requestedFile, function(err, content) {
//         if(err) {
//             res.writeHead(404);
//             res.end();
//         } else {
//             let mime = mimetypeLookup(filePath);
//             res.writeHead(200, { "content-type": mime });
//             res.end(content);
//         }
//     });
// });
// server.listen(2345);


// Do the above using express Module 
const express = require("express");
const app = express();
app.listen(2345);
app.use(express.static("../../../Phase\ 1/Week\ 5/Bootstrap/Apple\ Project"));