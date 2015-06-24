var checkMate;
(function (checkMate) {
    var Controllers;
    (function (Controllers) {
        var EventController = (function () {
            function EventController(eventService) {
                var _this = this;
                this.getEvents = function () {
                    _this.events = _this.eventService.getEventList();
                };
                this.getEventDetails = function (eventId) {
                    _this.selectedEvent = eventId;
                    _this.eventDetails = _this.eventService.getEventDetailsByEventId(eventId);
                };
                this.eventService = eventService;
                this.events = this.eventService.getEventList();
            }
            EventController.$inject = ["checkMate.Services.EventService"];
            return EventController;
        })();
        Controllers.EventController = EventController;
        angular.module("checkMate").controller("checkMate.Controllers.eventController", EventController);
    })(Controllers = checkMate.Controllers || (checkMate.Controllers = {}));
})(checkMate || (checkMate = {}));
//# sourceMappingURL=eventController.js.map