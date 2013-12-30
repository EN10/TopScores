var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  // response.send('Hello World!');
  var fs = require('fs');
  response.send(fs.readFileSync('Scores.txt').toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
