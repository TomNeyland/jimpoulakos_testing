"use strict";
var EventBus = (function() {
  function EventBus($rootScope) {
    this.$scope = $rootScope;
    this.registry = {};
  }
  return ($traceurRuntime.createClass)(EventBus, {}, {});
}());
EventBus.$inject = ['$rootScope'];
Object.defineProperties(module.exports, {
  EventBus: {get: function() {
      return EventBus;
    }},
  __esModule: {value: true}
});
