var expect = require("chai").expect;

var Waterline = require('waterline');
var diskAdapter = require('sails-disk');
var userCollection = require('../models/user');
var errorCollection = require('../models/error');
var bcrypt = require('bcryptjs');

var ormConfig = {
    adapters: {
        disk: diskAdapter
    },
    connections: {
        disk: {
            adapter: 'disk'
        }
    },
    defaults: {
        migrate: 'alter'
    }
};

var User;

before(function (done) {
    var orm = new Waterline();

    orm.loadCollection(userCollection);
    orm.loadCollection(errorCollection);

    orm.initialize(ormConfig, function(err, models) {
        if(err) throw err;
        User = models.collections.user;
        done();
    });
});

describe('UserTest', function () {
    before(function (done) {
        User.destroy({neptun: 'abcdef'}, function (err) {
            if (err) throw err;
            done();
        });
    });
    it('should create a new user', function () {
       return User.create({
            neptun: 'abcdef',
            password: 'jelszo',
            surname: 'Gipsz',
            forename: 'Jakab',
            avatar: '',
        })
        .then(function (user) {
            expect(user.neptun).to.equal('abcdef');
            expect(bcrypt.compareSync('jelszo', user.password)).to.be.true;
            expect(user.surname).to.equal('Gipsz');
            expect(user.forename).to.equal('Jakab');
            expect(user.avatar).to.equal('');
        });
   });
   
   it('should be able to find a user', function() {
    return User.findOneByNeptun('abcdef')
    .then(function (user) {
            expect(user.neptun).to.equal('abcdef');
            expect(bcrypt.compareSync('jelszo', user.password)).to.be.true;
            expect(user.surname).to.equal('Gipsz');
            expect(user.forename).to.equal('Jakab');
            expect(user.avatar).to.equal('');
        });
    });
    
    it('should throw error for invalid data', function () {
        return expect(User.create({
            neptun: 'abcdef',
            password: 'jelszo',
            surname: 'Gipsz',
            forename: 'Jakab',
            avatar: 'almakorte',
        })).to.throw;
    });    
});

describe('#validPassword', function() {
    beforeEach(function (done) {
        User.destroy({neptun: 'abcdef'}, function (err) {
            if (err) throw err;
            done();
        });
    });
    it('should return true with right password', function() {
         return User.create({
            neptun: 'abcdef',
            password: 'jelszo',
            surname: 'Gipsz',
            forename: 'Jakab',
            avatar: '',
        }).then(function(user) {
             expect(user.validPassword('jelszo')).to.be.true;
         })
    });
    it('should return false with wrong password', function() {
         return User.create({
            neptun: 'abcdef',
            password: 'jelszo',
            surname: 'Gipsz',
            forename: 'Jakab',
            avatar: '',
        }).then(function(user) {
             expect(user.validPassword('titkos')).to.be.false;
         })
    });
});