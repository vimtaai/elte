var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
    identity: 'error',
    connection: 'disk',
    attributes: {
        datum: {
            type: 'date',
            defaultsTo: function () { return new Date(); }
        },
        terem: 'string',
        leiras: 'string',
        kesz: {
            type: 'boolean',
            defaultsTo: false
        }
    }
});