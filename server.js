/******************************************************
 * This is the Request Header Parser Microservice server file
 * Developed by JDA to potential clients
 * ***************************************************/

var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(function (req, res) {
  var ip = req.headers['x-forwarded-for'].split(',')[0];
  var lang = req.headers['accept-language'].split(',')[0];
  var soft = req.headers['user-agent'].split(';');
  console.log(req.headers);
  console.log(ip, lang, soft[0], soft[1], soft[2]);
  res.end();
});
app.listen(process.env.PORT, function () {
});

