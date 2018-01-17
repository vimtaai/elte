var express = require('express');
var router = new express.Router;
var passport = require('passport');

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    req.flash('info', 'A kért tartalom megjelenítéséhez bejelentkezés szükséges');
    res.redirect('/auth/login');
}

router.route('/auth/login')
    .get(function (req, res) {
        res.render('auth/login');
    })
    .post(passport.authenticate('local-login', {
        successRedirect:    '/list',
        failureRedirect:    '/auth/login',
        failureFlash:       true,
        badRequestMessage:  'Hiányzó adatok'
    }));

router.route('/auth/signup')
    .get(function (req, res) {
        res.render('auth/signup');
    })
    .post(passport.authenticate('local-signup', {
        successRedirect:    '/add',
        failureRedirect:    '/auth/signup',
        failureFlash:       true,
        badRequestMessage:  'Hiányzó adatok'
    }));

router.use('/auth/logout', function (req, res) {
    req.logout();
    res.redirect('/auth/login');
});

// Itt kellene megoldani a végpontokat
router.get('/', function (req, res) {
    res.render('info', {
       title: 'My App'
    });
});

router.route('/list')
    .get(ensureAuthenticated, function (req, res) {
        var result;
        if (req.query.query) {
            var keresettDatum = new Date(req.query.query);
            result = req.app.Models.birthday.find({
                 datum: keresettDatum,
                 user: req.user.id
            });
        } else {
            result = req.app.Models.birthday.find({
                user: req.user.id
            });
        }
        result
            // Ha nem volt hiba fusson le ez
            .then(function (data) {
                res.render('list', {
                    title: 'My App',
                    data: data,
                    query: req.query.query,
                    uzenetek: req.flash()
                });
            })
            // Ha volt hiba fusson le ez
            .catch(function () {
                console.log('Hiba!!');
                throw 'error';
            });
        //console.log(req.session.data);
    });
    
router.route('/list/:id')
    .get(ensureAuthenticated, function (req, res) {
        req.app.Models.birthday.find({ id: req.params.id })
        .then(function (data) {
            res.render('list', {
                title: 'My App',
                data: data,
                uzenetek: req.flash()
            });  
        })
        .catch(function () {
            console.log('Hiba!!');
            throw 'error';
        });
    });
router.route('/add')
    .get(ensureAuthenticated, function (req, res) {
        res.render('add', {
            title: 'My App',
            uzenetek: req.flash()
        });
    })
    .post(ensureAuthenticated, function (req, res) {
        /*req.session.data = req.session.data || [];
        req.session.data.push({
            id: Math.floor(Math.random() * 99999999),
            nev: req.body.nev,
            datum: req.body.datum
        });*/
        req.checkBody('nev', 'Hiba a névvel')
            .notEmpty();
        req.checkBody('datum', 'Valami nem ok a dátummal')
            .notEmpty()
            .isDate()
            .withMessage('Nem megfelelő dátumformátum');
        
        if (req.validationErrors()) {
            req.validationErrors().forEach(function (error) {
                req.flash('error', error.msg);
            });
            res.redirect('/add');
        } else {
            req.app.Models.birthday.create({
                nev: req.body.nev,
                datum: req.body.datum,
                user: req.user.id
            })
            .then(function () {
                req.flash('success', 'Születésnap felvéve');
                res.redirect('/add');
            })
            .catch(function () {
                req.flash('error', 'Születésnap felvétele sikertelen!');
                res.redirect('/add');
            });
        }
        //console.log(req.session.data);
    });
    
router.use('/delete/:id', ensureAuthenticated, function (req, res) {
        /*req.session.data = req.session.data || [];
        req.session.data = req.session.data.filter(function (elem) {
            return elem.id != req.params.id;
        });*/
        req.app.Models.birthday.destroy({ id: req.params.id })
        .then(function () {
            req.flash('success', 'Születésnap törölve');
            res.redirect('/list'); 
        })
        .catch(function () {
            req.flash('error', 'Üzenet törlése sikertelen');
            res.redirect('/list');
        });;
    });


module.exports = router;