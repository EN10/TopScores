var express = require('express');
var app = express();
app.use(express.logger());
app.get('/', function(req, res) {
  var fs = require('fs');
  try       // Insert Score
  {   var arr = fs.readFileSync('Scores.txt').toString().split(",");
      if (req.query.un !== undefined && req.query.s !== undefined)
        {/*   var scores = "";    var insert = 0;
            for (var i=0; i<arr.length; i=i+2)
            {   if (req.query.s >= arr[i+1] && insert === 0)
                { scores = scores +req.query.un +"," +req.query.s +",";
                  scores = scores +arr[i] +"," +arr[i+1] +",";
                  insert = 1; }
                else
                { scores = scores +arr[i] +"," +arr[i+1] +","; } 
            } 
        fs.writeFileSync('Scores.txt', scores);*/
        fs.appendFileSync('Scores.txt', "," + req.query.un + "," + req.query.s);
        }   // Read & Output to HTML
        arr = fs.readFileSync('Scores.txt').toString().split(",");
        var body = "";
        for (var j=0; j<arr.length; j=j+2)
        {   body = body + arr[j] +" " +arr[j+1] +"<br>";   }
        var head = '<a href="http://reaction.herokuapp.com/">Back to Reaction</a><p>';
        res.send(head+body); 
  } catch(err)
  { res.send(err); }
});
var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});