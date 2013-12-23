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
