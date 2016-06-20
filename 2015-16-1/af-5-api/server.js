var express = require('express');
var fortune = require('fortune');
var nedb = require('fortune-nedb');
var jsonapi = 
        require('fortune-json-api');

var server = express();
var store  = fortune({
    adapter: {
        type: nedb,
        options: {
          dbPath: __dirname + '/.db'
        }
    },
    serializers: [{
        type: jsonapi
    }]
});

server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

server.use(function (req, res, next) {
    console.log(req.method + ' ' + req.url);
    next();
});

store.defineType('player', {
    name: { type: String },
    race: { type: String },
    league: { type: String }
});

store.defineType('match', {
    map: { type: String },
    type: { type: String },
    team1win: { type: Boolean },
    team1: {
        link: 'player',
        isArray: true
    },
    team2: {
        link: 'player',
        isArray: true 
    }
});

server.use(fortune.net.http(store));

var port = process.env.PORT || 8080;

store.connect().then(function () {
    server.listen(port, function () {
        console.log('Server started on port ' + port);
    });
});