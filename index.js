// Testfile to run on Minishift
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello MiniShift!');
});

app.listen(3000, function () {
  console.log('Simple app listening on port 3000!');
});