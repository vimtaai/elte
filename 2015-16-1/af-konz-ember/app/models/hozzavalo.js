import DS from 'ember-data';

export default DS.Model.extend({
  nev: DS.attr('string'),
  mennyiseg: DS.attr('number') 
});
