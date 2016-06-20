var express = require('express');
var router = new express.Router;

router.route('/add')
    .get(function (req, res) { res.render('add'); })
    .post(function (req, res) {
        if (!req.session.data) {
            req.session.data = [];
        }
        req.session.data.push({
            datum: Date.now(),
            terem: req.body.terem,
            leiras: req.body.leiras,
            kesz: false
        });
        console.log(req.session.data);
        res.redirect('/add');
    });
router.route('/list')
    .get(function (req, res) {
            res.render('list', {
            hibak: req.session.data
        }); 
    });

module.exports = router;