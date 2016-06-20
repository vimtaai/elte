var express = require('express');
var app = express();
var config = require('./config');
var router = require('./router');
// npm install express-handlebars --save
var exphbs = require('express-handlebars');

app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/view');

app.use(express.static('public'));
app.use(router);

app.listen(config.port, function () {
    console.log('App server started on port ' + config.port);
});