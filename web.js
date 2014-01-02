var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(req, res) {
  var fs = require('fs');
  try
  { if (req.query.un !== undefined && req.query.s !== undefined)
    { fs.appendFileSync('Scores.txt', "," + req.query.un + "," + req.query.s); }

    // Read & Output to HTML
    var arr = fs.readFileSync('Scores.txt').toString().split(",");
    var body = "";
    for (var i=0; i<arr.length; i=i+2)
    {   body = body + arr[i] +" " +arr[i+1] +"<br>";   }
    var head = '<a href="http://reaction.herokuapp.com/">Back to Reaction</a><p>';
    res.send(head+body);
  }
  catch(err)
  { res.send(err); }
});

var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});