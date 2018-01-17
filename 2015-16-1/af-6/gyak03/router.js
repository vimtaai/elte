var express = require("express");
var router = new express.Router;

router.route('/')
    .get(function (req, res) {
        res.render('app', {
            name: 'Micimackó'
        });
    });

/*router.route('/')
    .get(function (req, res) {})
    .post(function (req, res) {});*/

module.exports = router;