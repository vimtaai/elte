import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    classNames: ['match panel'],
    classNameBindings: ['current.team1win:panel-success:panel-danger'],
    actions: {
        onClick: function (id) {
            this.get('onDel')(id);
        }
    }
});
