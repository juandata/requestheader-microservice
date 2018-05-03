/******************************************************
 * This is the Request Header Parser Microservice server file
 * Developed by JDA to potential clients
 * ***************************************************/

var express = require('express');
var app = express();

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.use(function (req, res) {
  res.attachment('https://cdn.glitch.com/1e1557f2-360f-4ae9-a13b-088a6215ca41%2Fdownload.jpg?1525375490432');

});

app.listen(process.env.PORT, function () {
});

