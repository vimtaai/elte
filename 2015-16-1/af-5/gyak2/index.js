// npm install express --save
// npm install nodemon -g // globális telepités

var express = require('express');
var app = express();

var config = require('./config');

var router = new express.Router;

router.route('/who/:id')
      .get(function (req, res) {
          res.send('GET on /who/' + req.params.id);
      })
      .post(function (req, res) {
          res.send('POST on /who/' + req.params.id);
      });

//router.get('/who', function (req, res) {
//   res.sendFile('./name.json', { root: __dirname}); 
//});

app.use(router);

//app.get('/who', function (req, res) {
//   res.sendFile('./name.json', { root: __dirname}); 
//});

app.listen(config.port, function () {
    console.log('App server started on port ' + config.port);
});