 var express = require("express");
 var app = express();

 /* serves main page */
 app.get("./", function(req, res) {
    res.sendfile('index.html')
 });

  app.post("/user/add", function(req, res) { 
	/* some server side logic */
	res.send("OK");
  });

 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){ 
     console.log('static file request : ' + req.params);
     res.sendfile(__dirname + req.params[0]);
     console.log("req para"+req.params);
 });

 var port = process.env.PORT || 80;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });


try 
{ var url = require('url');
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  
  var fs = require('fs');
  var filename = 'Scores.txt';

  var txt = fs.readFileSync(filename).toString(); 
  document.getElementById("main").innerHTML = txt;
  console.log("url parts"+query);
}
catch(err)
{ console.log(err); }
