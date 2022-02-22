var express = require("express");
const Port = process.env.PORT || 8000;
var sampleFile;
var uploadPath;
const open = require('open');
//use the application off of express.
var app = express();

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/login.html");
});


app.listen(Port, function () {
    console.log('Express server listening on port ', Port); // eslint-disable-line
});
app.get('/upload', function (request, response) {
    response.sendFile(__dirname + "/home.html");
}),
//define the route for "/"
app.listen(8080);
open('http://localhost:8080');
console.log("Please launch http://localhost:8080 in your browser url");
