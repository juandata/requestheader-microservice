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
  var resJson = {
   "ipaddress" : ip,
    "language" : lang,
    "software" : soft[0].split('(')[1] + " " + soft[1] + " " + soft[2]
  }
  res.json(resJson);
  res.end();
});
app.listen(process.env.PORT, function () {
});

