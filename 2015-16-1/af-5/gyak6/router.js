var express = require('express');
var passport = require('passport');
var router = new express.Router;

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    req.flash('error', 'A kért tartalom megtekintéséhez be kell jelentekzni!');
    res.redirect('/login/login');
}

function andRestrictTo(role) {
    return function(req, res, next) {
        if (req.user.role == role) {
            next();
        } else {
            res.status(403).send('mennyinnen');
        }
    }
}

router.route('/login/login')
    .get(function (req, res) {
        res.render('login/index', {
            uzenetek: req.flash()
        });
    })
    .post(passport.authenticate('local-login', {
        successRedirect: '/list',
        failureRedirect: '/login/login',
        failureFlash: true,
        badRequestMessage: 'Hibás felhasználó vagy jelszó!'
    }));
    
router.route('/login/signup')
    .get(function (req, res) {
        res.render('login/signup', {
            uzenetek: req.flash()
        });
    })
    .post(passport.authenticate('local-signup', {
        successRedirect:    '/login/login',
        failureRedirect:    '/login/signup',
        failureFlash:       true,
        badRequestMessage:  'Hiányzó adatok'
    }));

router.use('/login/logout', function (req, res) {
    req.logout();
    res.redirect('/login/login');
});

router.route('/')
    .get(function (req, res) {
        res.render('info');
    });
router.route('/add')
    .get(ensureAuthenticated, function (req, res) { 
        res.render('add', {
            uzenetek: req.flash()
        }); 
    })
    .post(ensureAuthenticated, function (req, res) {
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
    .get(ensureAuthenticated, function (req, res) {
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
    .get(ensureAuthenticated, andRestrictTo('operator'), function (req, res) {
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
    .get(ensureAuthenticated, function (req, res) {
        req.app.models.error.update({
            id: req.params.id
        }, {
            kesz: true
        }).then(function () {
            res.redirect('/list');  
        });
    });
router.route('/error/:id')
    .get(ensureAuthenticated, function (req, res) {
        req.app.models.error.findOne({
            id: req.params.id
        }).then(function (hiba) {
            res.render('error', {
                hiba: hiba
            })
        });;
    });
module.exports = router;