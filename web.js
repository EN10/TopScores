var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(req, res) {
  var fs = require('fs');
  if fs.exists('Scores.txt') == true
  { if (req.query.q != undefined)
    { fs.appendFileSync('Scores.txt', "\n" + req.query.q); }
    res.send(fs.readFileSync('Scores.txt').toString());
  }
  else
  {
    res.send("nofile");
  }
});

var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});
