var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
    identity: 'birthday',
    connection: 'disk',
    attributes: {
        nev: {
            type: 'string',
            required: true
        },
        datum: 'date',
        user: {
            model: 'user'
        }
        
    }
});