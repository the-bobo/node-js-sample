var express = require('express');
//var fs = require('fs');

var app = express();
app.use(express.logger());
var fs = require('fs');

var hello = fs.readFileSync("index.html").toString();

app.get('/', function(request, response) {
  response.send(hello);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
