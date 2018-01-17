var express = require('express');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var app = express();
var Waterline = require('waterline');
var diskAdapter = require('sails-disk');
var flash = require('connect-flash');
var validator = require('express-validator');

var session = require('express-session');
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'titkos szoveg',
    resave: false,
    saveUninitialized: false,
}));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());
app.use(validator());

app.use('public', express.static(__dirname + '/public'));
var router = require('./router');
app.use(router);

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

orm.loadCollection(require('./models/error'));

orm.initialize(ormConfig, function (err, models) {
    if (err) throw err;
    var port = process.env.PORT || 1337;
    
    app.models = models.collections;
    
    app.listen(port, function () {
        console.log('Server started on port ' + port);
    });
});