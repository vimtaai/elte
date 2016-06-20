import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        // TODO: valahonnan legyen id
        deleteMatch: function (id) {
            this.store.findRecord('match', id).then(function(match) {
                match.destroyRecord();
            });
        }
    }
});
