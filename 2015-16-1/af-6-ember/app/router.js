import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('inventory', {path: '/inv'}, function() {
    this.route('details', {path: ':itemid'});
  });
  this.route('map');
  this.route('pickup');
});

export default Router;
