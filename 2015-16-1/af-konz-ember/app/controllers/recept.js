import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveEdit: function () {
      this.model.save();
    },
    addNew: function () {
      var _this = this;
      var uj = this.store.createRecord('hozzavalo', {
        nev: this.ujHozzavaloNev,
        mennyiseg: this.ujHozzavaloDarab
      });
      uj.save().then(function () {
        _this.model.get('hozzavalok').pushObject(uj);
        console.log(uj);
        _this.model.save();
        _this.ujHozzavaloNev.set("");
        _this.ujHozzavaloDarab.set("");
      }).catch(function () {});
    },
    delete: function (id) {
      this.store.find('hozzavalo', id).then(function (h) {
	h.destroyRecord();
      });
    }
  }

});
