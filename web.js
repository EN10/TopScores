var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(req, res) {
  // var fs = require('fs');
  // res.send(fs.readFileSync('Scores.txt').toString());
  // res.send(req.param('q'));
  res.send(req.query.q);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
