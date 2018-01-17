var express = require("express");
var app = express();

var config = require("./config");

app.set('view engine', 'hbs');
app.set('views', './view');

app.use('/public', express.static('public'));

var router = require("./router");
app.use(router);

app.listen(config.port, function () {
    console.log('App server started on port ' + config.port);
});