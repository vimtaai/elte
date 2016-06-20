import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('recept', {path: '/recept/:receptid'});
  this.route('new');
});

export default Router;
