import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        onSubmit: function () {
            this.get('onSave')({
                map: $('[name="map"]').val(),
                type: $('[name="type"]').val(),
                team1: [
                    $('.team1 select:nth-of-type(1)').val(),
                    $('.team1 select:nth-of-type(2)').val(),
                    $('.team1 select:nth-of-type(3)').val(),
                    $('.team1 select:nth-of-type(4)').val()
                ],
                team2: [
                    $('.team2 select:nth-of-type(1)').val(),
                    $('.team2 select:nth-of-type(2)').val(),
                    $('.team2 select:nth-of-type(3)').val(),
                    $('.team2 select:nth-of-type(4)').val()
                ] ,
                team1win: $('[name="victor"]').val() == 'true' ? true : false
            });
            //this.onSave();
        }
    }
});
