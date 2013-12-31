var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(req, res) {
  var fs = require('fs');
  // txt = txt + '\n' + ;
  fs.writeFileSync('Scores.txt', req.query.q);
  var txt = fs.readFileSync('Scores.txt').toString();
  res.send(txt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
