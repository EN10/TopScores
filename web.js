var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  // var fs = require('fs');
  // response.send(fs.readFileSync('Scores.txt').toString());
  response.send(req.query.q.toString());
  console.log(req.query.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
