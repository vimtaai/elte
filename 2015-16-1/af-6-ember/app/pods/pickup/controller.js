import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newItem: function () {
            var item = {};
            item.name = $('[name="name"]').val();
            item.type = $('[name="type"]').val();
            item.count = $('[name="count"').val();
            item.equipable = (item.type == 'weapon');
            this.store.createRecord('item', item).save();
        }
    }
});
