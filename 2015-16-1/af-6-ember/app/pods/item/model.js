import DS from 'ember-data';

var Item = DS.Model.extend({
    type: DS.attr('string'),
    name: DS.attr('string'),
    count: DS.attr('number'),
    equipable: DS.attr('boolean'),
    equipped: DS.attr('boolean')
});

Item.reopenClass({
    FIXTURES: [
            {
                id: 1,
                type: 'misc',
                name: 'teddy bear',
                count: '10',
                equipable: false,
                equipped: false
            },
            {
                id: 2,
                type: 'weapon',
                name: 'shotgun',
                count: '1',
                equipable: true,
                equipped: false
            },
            {
                id: 3,
                type: 'aid',
                name: 'Rad-X',
                count: '12',
                equipable: false,
                equipped: false
            }
        ]
});

export default Item;