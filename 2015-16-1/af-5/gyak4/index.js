var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var session = require('express-session');
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'titkos szoveg',
    resave: false,
    saveUninitialized: false,
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('public', express.static(__dirname + '/public'));
var router = require('./router');
app.use(router);

var port = process.env.PORT || 1337;
app.listen(port, function () {
    console.log('Server started on port ' + port);
});