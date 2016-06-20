var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');

app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'titkos szoveg',
    resave: false,
    saveUninitialized: false,
}));


app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Itt kellene megoldani az űrlapkezelést

var router = require('./router');
app.use(router);

var port = process.env.PORT || 1337;
app.listen(port, function () {
    console.log('App server started on port ' + port);
});