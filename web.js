var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(req, res) {
  var fs = require('fs');
  try       // Insert Score
  {   var arr = fs.readFileSync('Scores.txt').toString().split(",");
      if (req.query.un !== undefined && req.query.s !== undefined)
        { var scores = "";
            for (var i=0; i<arr.length+2; i=i+2)
            {   if (req.query.s <= arr[i+1])
                { scores = scores +req.query.un +"," +arr[i+1] +","; }
                else
                { scores = scores +arr[i] +"," +arr[i+1] +","; }
            fs.writeFileSync('Scores.txt', scores); 
            }
        }
            // Read & Output to HTML
        var body = "";
        for (var j=0; j<arr.length; j=i+2)
        {   body = body + arr[j] +" " +arr[j+1] +"<br>";   }
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