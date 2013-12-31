var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(req, res) {
  var fs = require('fs');
  fs.appendFileSync('Scores.txt', "\n" + req.query.q);
  res.send(fs.readFileSync('Scores.txt'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
