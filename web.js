var fs = require('fs')

var express = require('express');
var app = express.createServer(express.logger());

data = fs.readFileSync('./index.html');
var content = new Buffer(data);

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
