var express = require('express');
var app = express();

// serve the main page/angular app
var path = require('path');
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, './public', 'index.html'));
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Shleem listening at localhost:%s', port);
});
