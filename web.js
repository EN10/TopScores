var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(req, res) {
  var fs = require('fs');
  if req.query.q != {} 
  { fs.appendFileSync('Scores.txt', "\n" + req.query.q); }
  res.send(fs.readFileSync('Scores.txt').toString());
});

var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});
