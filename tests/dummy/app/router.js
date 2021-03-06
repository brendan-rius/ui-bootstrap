import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('css');
  this.route('components');
  this.route('addons');
});

export default Router;
