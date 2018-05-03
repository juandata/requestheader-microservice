/******************************************************
 * This is the Request Header Parser Microservice server file
 * Developed by JDA to potential clients
 * ***************************************************/

var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(function (req, res) {
  var ip = req.headers['x-forwarded-for'].split(',')[0];
  console.log(req.headers);
  console.log(ip);
  res.end();
});
app.listen(process.env.PORT, function () {
});

