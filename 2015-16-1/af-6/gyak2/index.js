var express = require('express');
var app = express();
var fs = require('fs'); 

var port = process.env.PORT || 1337;
//var port = (process.env.PORT == undefined ? 1337 : process.env.PORT);

app.use('/:file', function (req, res, next) {
    fs.readFile(__dirname + '/files/' + req.params.file, function (err) {
        if (err) {
            res.status(404).send('404 Not found.');
        } else {
            next();
        }
    });
});

app.get('/:file', function (req, res) {
    //res.send('Hello, you requested ' + req.params.file + '. Here it is:');
    res.sendFile(__dirname + '/files/' + req.params.file);
});

app.listen(port, function () {
    console.log('Server started on port ' + port);
});