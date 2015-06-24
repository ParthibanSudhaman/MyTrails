var checkMate;
(function (checkMate) {
    var Controllers;
    (function (Controllers) {
        var EventListController = (function () {
            function EventListController(eventListService) {
                var _this = this;
                //events: Array<Interfaces.IEvent>;
                this.getEvents = function () {
                    _this.events = _this.eventListService.getEventList();
                };
                this.eventListService = eventListService;
                this.events = this.eventListService.getEventList();
            }
            EventListController.$inject = ["checkMate.Services.EventListService"];
            return EventListController;
        })();
        Controllers.EventListController = EventListController;
        angular.module("checkMate").controller("checkMate.Controllers.eventListController", EventListController);
    })(Controllers = checkMate.Controllers || (checkMate.Controllers = {}));
})(checkMate || (checkMate = {}));
//# sourceMappingURL=eventListController.js.map