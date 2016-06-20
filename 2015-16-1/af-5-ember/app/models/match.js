import DS from 'ember-data';

var Match = DS.Model.extend({
  type: DS.attr('string'),
  map: DS.attr('string'),
  team1: DS.hasMany('player', { async: true }),
  team2: DS.hasMany('player', { async: true }),
  team1win: DS.attr('boolean')
});

Match.reopenClass({
  FIXTURES: [
      {
          id: 1,
          type: '1v1',
          map: 'Bel\'shir vestige',
          team1: [1],
          team2: [2],
          team1win: true
      },
      {
          id: 2,
          type: '1v1',
          map: 'Lost Temple',
          team1: [1],
          team2: [3],
          team1win: true
      },
      {
          id: 3,
          type: '1v1',
          map: 'Korhal City',
          team1: [1],
          team2: [4],
          team1win: false
      }
  ]
});

export default Match;