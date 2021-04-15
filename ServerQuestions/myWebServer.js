
// // Question c myRandom only
const myRandom = require("./myRandomNumber.js")


// var http = require('http');

// //create a server object:
// var server = http.createServer(function (req, res) {
//     let x = myRandom.basazinew();
//   res.write(`Request is received and processed.\n${x}` ); //write a response to the client
//   res.end(); //end the response
// })
// server.listen(1234);

// // ***********OR*************
// var server = http.createServer(function (req, res) {
//     res.write("Request received and processed."); //write a response to the client
//     res.end("\n" + myRandom.basazinew()); //end the response
//   })
//   server.listen(1234);



// By Using Express module
const express = require("express");
const app = express();
app.listen(1234);
app.get("/", (req, res) => {
    res.write("Request received and processed.");
    res.end("\n" + myRandom.basazinew());
}) 

