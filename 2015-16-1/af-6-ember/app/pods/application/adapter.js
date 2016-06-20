import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://af6-api-vimtaai.c9users.io',
    namespace: 'api/v1'
});
