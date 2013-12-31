var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(req, res) {
  var fs = require('fs');
  var txt = fs.readFileSync('Scores.txt');
  txt = txt + "\n" + req.query.q;
  fs.writeFileSync('Scores.txt', txt);
  res.send(txt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
