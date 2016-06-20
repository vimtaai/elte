import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        equipItem: function (id) {
            //alert(id);
            this.store.find('item', id)
                .then(function (item) {
                    item.set('equipped', !item.get('equipped'));
                    item.save();
                });
        }
    }
});
