'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

Object.defineProperty(exports, '__esModule', {
    value: true
});

var EventBus = function EventBus($rootScope) {
    _classCallCheck(this, EventBus);

    this.$scope = $rootScope;
    this.registry = {};
};

exports.EventBus = EventBus;

EventBus.$inject = ['$rootScope'];