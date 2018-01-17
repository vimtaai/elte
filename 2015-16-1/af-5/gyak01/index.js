var express = require('express');
var app = express();

app.get('/alma', function (req, res) {
    res.send('Hello world');
});

app.listen(process.env.PORT); 