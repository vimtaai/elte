var express = require('express');
var router = new express.Router;

// Itt kellene megoldani a végpontokat
router.get('/', function (req, res) {
    res.render('info', {
       title: 'My App'
    });
});

router.route('/list')
    .get(function (req, res) {
        var filteredData = req.session.data || [];
        if (req.query.query) {
            filteredData = filteredData.filter(function (elem) {
                return elem.datum == req.query.query;
            });
        }
        res.render('list', {
            title: 'My App',
            data: filteredData,
            query: req.query.query
        });
        //console.log(req.session.data);
    });
router.route('/list/:id')
    .get(function (req, res) {
        res.render('list', {
            title: 'My App'
        })
    });
router.route('/add')
    .get(function (req, res) {
        res.render('add', {
            title: 'My App'
        })
    })
    .post(function (req, res) {
        req.session.data = req.session.data || [];
        req.session.data.push({
            id: Math.floor(Math.random() * 99999999),
            nev: req.body.nev,
            datum: req.body.datum
        });
        //console.log(req.session.data);
        res.redirect('/add');
    });
    
router.route('/delete/:id')
    .get(function (req, res) {
        req.session.data = req.session.data || [];
        req.session.data = req.session.data.filter(function (elem) {
            return elem.id != req.params.id;
        });
        res.redirect('/list');
    });


module.exports = router;