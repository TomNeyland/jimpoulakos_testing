export class EventBus {
    constructor ($rootScope) {
        this.$scope = $rootScope;
        this.registry = {};
    }
}
EventBus.$inject = ['$rootScope'];
