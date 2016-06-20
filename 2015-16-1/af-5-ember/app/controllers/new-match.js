import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newMatch: function (matchData) {
            console.log(matchData);
            var team1 = matchData.team1;
            var team2 = matchData.team2;
            delete matchData.team1;
            delete matchData.team2;
            var store = this.store;
            var match = this.store.createRecord('match', matchData);
            match.save().then(function () {
                team1.forEach(function (player) {
                    if (player != null && player != 'null') {
                        //console.log(player);
                        store.findRecord('match', match.get('id'))
                            .then(function (_match) {
                                store.findRecord('player', player)
                                    .then(function (_player) {
                                        _match.get('team1').pushObject(_player);
                                        _match.save();
                                    });
                            });
                    }
                });
                console.log(match);
                team2.forEach(function (player) {
                    if (player != null && player != 'null') {
                        //console.log(player);
                        store.findRecord('match', match.get('id'))
                            .then(function (_match) {
                                store.findRecord('player', player)
                                    .then(function (_player) {
                                        _match.get('team2').pushObject(_player);
                                        _match.save();
                                    });
                            });
                    }
                });
                
            });
            
        }
    }
});
