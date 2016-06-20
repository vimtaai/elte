import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        dropItem: function (id) {
            //alert('dropping item #'+id);
            this.store.find('item', id)
                .then(function (item) {
                    if (item.get('count') == 1) {
                        item.destroyRecord();
                    } else {
                        item.set('count', item.get('count')-1);
                        item.save();
                    }
                });
        }
    }
});
