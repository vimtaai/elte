import Ember from 'ember';

export default Ember.Component.extend({
    contextMenu: function (event) {
        event.preventDefault();
        this.myAction(this.data.id);
    }
});
