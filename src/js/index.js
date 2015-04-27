// load npm/browserify modules
import angular from 'angular';

//load our modules
import EventBus from './services/EventBus';


angular.module('test', []).service('EventBus', EventBus);
