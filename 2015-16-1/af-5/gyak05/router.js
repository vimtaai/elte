var express = require('express');
var router = new express.Router;

router.route('/')
    .get(function (req, res) {
        res.render('info');
    });

router.route('/add')
    .get(function (req, res) { 
        res.render('add', {
            uzenetek: req.flash()
        }); 
    })
    .post(function (req, res) {
        //req.session.data = req.session.data || [];
        /*if (!req.session.data) {
            req.session.data = [];
        }*/
        /*req.session.data.push({
            id: Math.floor(Math.random() * 1000000),
            datum: Date.now(),
            terem: req.body.terem,
            leiras: req.body.leiras,
            kesz: false
        });*/
        req.checkBody('leiras').notEmpty().withMessage('Kihagytál valamit!');
        if (req.validationErrors()) {
            req.validationErrors().forEach(function (error) {
                req.flash('error', error.msg);
            });
            res.redirect('/add');
        } else {
            req.app.models.error.create({
                terem: req.body.terem,
                leiras: req.body.leiras,
            })
            .then(function () {
                req.flash('success', 'Üzenet sikeresen létrehozva.');
                res.redirect('/add'); 
            });
        }
    });
    
router.route('/list')
    .get(function (req, res) {
        //req.session.data = req.session.data || [];
        /*if (!req.session.data) {
            req.session.data = [];
        }*/
        //var data = req.session.data;
        /*if (req.query.kereses) {
            data = req.session.data.filter(function (elem) {
                return (elem.leiras.indexOf(req.query.kereses) != -1);
            });
        }*/
        var result;
        
        if (req.query.kereses) {
            result = req.app.models.error.find({
                leiras: { 'contains': req.query.kereses }
            });
        } else {
            result = req.app.models.error.find();
        }
        
        result.then(function (hibak) {
            res.render('list', {
                uzenetek: req.flash(),
                hibak: hibak
            });
        });
    });
    
router.route('/delete/:id')
    .get(function (req, res) {
        //req.session.data = req.session.data || [];
        /*req.session.data = req.session.data.filter(function (elem) {
            return (elem.id != req.params.id);
        });*/
        req.app.models.error.destroy({
            id: req.params.id
        }).then(function () {
            req.flash('success', 'Hiba törölve.');
            res.redirect('/list');  
        });
    });
    
router.route('/ready/:id')
    .get(function (req, res) {
        req.app.models.error.update({
            id: req.params.id
        }, {
            kesz: true
        }).then(function () {
            res.redirect('/list');  
        });
    });

router.route('/error/:id')
    .get(function (req, res) {
        req.app.models.error.findOne({
            id: req.params.id
        }).then(function (hiba) {
            res.render('error', {
                hiba: hiba
            })
        });;
    });

module.exports = router;