var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var Waterline = require('waterline');
var diskAdapter = require('sails-disk');
var flash = require('connect-flash');
var validator = require('express-validator');
var hbs = require('hbs');

app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'titkos szoveg',
    resave: false,
    saveUninitialized: false,
}));

app.use(flash());
app.use(validator());

var orm = new Waterline();
var ormConfig = {
    adapters: {
        disk: diskAdapter
    },
    connections: {
        disk: {
            adapter: 'disk'
        }
    },
    defaults: {
        migrate: 'alter'
    }
};


app.use(bodyParser.urlencoded({ extended: false }));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Itt kellene megoldani az űrlapkezelést

var router = require('./router');
app.use(router);

orm.loadCollection(require('./models/birthday'));

orm.initialize(ormConfig, function (err, models) {
    if (err) throw err;
    
    app.Models = models.collections;
    
    var port = process.env.PORT || 1337;
    app.listen(port, function () {
        console.log('App server started on port ' + port);
    });
});