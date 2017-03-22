// Testfile to run on Minishift
var express = require('express');
var app = express();

console.log(process.env);
app.get('/', function (req, res) {
  res.send('Hello MiniShift!');
});

app.listen(8080, function () {
  console.log('Simple app listening on port 3000!');
});
