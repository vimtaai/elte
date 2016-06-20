import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {
            CurrentPlayer: this.store.findRecord('player', 'vxLPSnWjPZt3xh1OX5Bq')
        };
    }
});
