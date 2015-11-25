var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/api/fakedata', function (req, res) {
    res.set({'Content-Type': 'application/json'});
    res.json(require('./example.json'));
});

var server = app.listen(8888);