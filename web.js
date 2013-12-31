var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(req, res) {
  var fs = require('fs');
  try
  { if !(fs.exists('Scores.txt'))
    { fs.openSync('Scores.txt', a+); }
    
    if (req.query.q != undefined)
    { fs.appendFileSync('Scores.txt', "<br>" + req.query.q); }
    res.send(fs.readFileSync('Scores.txt').toString());
  }
  catch(err)
  { res.send(err); }
});

var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});
