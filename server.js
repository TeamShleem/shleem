var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
	type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({
	extended: true
})); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/dist')); // set the static files location /dist/img will be /img for users

app.post('/', function (req, res) { // function sends information to the root of our application
	console.log(req.body);
	res.json(req.body);
});


// serve the main page/angular app
var path = require('path');
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Shleem listening at localhost:%s', port);
});
