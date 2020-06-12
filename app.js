console.log('Testing Connection');

var express = require("express");
var app = express();

app.get('/', function(request, response) {
    response.send('Hello World');
});

app.get("*", function(req, res) {
    res.send("404 NOT FOUND");
});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});