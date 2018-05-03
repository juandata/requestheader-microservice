/******************************************************
 * This is the Request Header Parser Microservice server file
 * Developed by JDA to potential clients
 * ***************************************************/

var express = require('express');
var app = express();

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.use(function (req, res) {
  //s.send(res.headersSent);v
  var h = res.get('Content-Type');
  res.send(h);
  console.log(h);
});

app.listen(process.env.PORT, function () {
});

