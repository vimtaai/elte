var expect = require("chai").expect;

var Waterline = require('waterline');
var userCollection = require('./user');
var birthdayCollection = require('./birthday');
var diskAdapter = require('sails-disk');
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
    // ORM indítása
    var orm = new Waterline();

    orm.loadCollection(userCollection);
    orm.loadCollection(birthdayCollection);
    //waterlineConfig.connections.default.adapter = 'memory';

    orm.initialize(ormConfig, function(err, models) {
        if(err) throw err;
        User = models.collections.user;
        done();
    });
});

describe('UserModel', function () {

    beforeEach(function (done) {
        User.destroy({
            neptun: 'abcdef'
        }, function (err) {
            if (err) throw err;
            done();
        });
    });
    
    it('should work', function () {
        expect(true).to.be.true;
    });
    
    it('should be able to create a user', function () {
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
    
    it('should throw an error', function () {
        return expect(User.create({
            neptun: 'abcdef',
            password: 'jelszo',
            surname: 'Gipsz',
            forename: 'Jakab',
            avatar: 'alma',
        })).to.throw;
    });

});

describe('validPassword', function() {
    beforeEach(function (done) {
        User.destroy({
            neptun: 'abcdef'
        }, function (err) {
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