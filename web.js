var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(req, res) {
  var fs = require('fs');
  try
  { if (req.query.un !== undefined && req.query.s !== undefined)
    { fs.appendFileSync('Scores.txt', "<br>" + req.query.un + " " + req.query.s); }
    res.send(fs.readFileSync('Scores.txt').toString());
    // var arr = fs.readFileSync('Scores.txt').toString().split(" ");
    // res.send(arr[0]);
  }
  catch(err)
  { res.send(err); }
});

var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});
