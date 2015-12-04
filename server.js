var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/analyzer/analyzer', function (req, res) {
    res.set({'Content-Type': 'application/json'});
    res.json(require('./example.json'));
});

var server = app.listen(8080);

