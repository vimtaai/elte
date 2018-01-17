var express = require('express');
var router = new express.Router;

router.get('/', function (req, res) {
    res.render('info');
});
router.get('/all', function (req, res) {
    var data = require('./data');
    res.render('all', { 
        messages: data,
        title: 'All messages',
        all: true
    });
});
router.get('/:user', function (req, res) {
    var data = require('./data');
    res.render('all', {
        messages: data.filter(function (elem) {
            return elem.user == req.params.user;
        }),
        title: 'Messages of ' + req.params.user
    });
})

module.exports = router;