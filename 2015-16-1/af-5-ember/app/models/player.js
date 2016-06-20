import DS from 'ember-data';

var Player = DS.Model.extend({
  name: DS.attr('string'),
  race: DS.attr('string'),
  league: DS.attr('string'),
});

Player.reopenClass({
    FIXTURES: [
    {
        id: 1,
        name: 'Ragelot',
        race: 'protoss',
        league: 'bronze',
    },
    {
        id: 2,
        name: 'Cuteling',
        race: 'zerg',
        league: 'bronze',
    },
    {
        id: 3,
        name: 'Z-LOT',
        race: 'protoss',
        league: 'bronze',
    },
    {
        id: 4,
        name: 'Patches',
        race: 'terran',
        league: 'bronze',
    } 
  ]
});

export default Player;
