var checkMate;
(function (checkMate) {
    var Services;
    (function (Services) {
        var EventListService = (function () {
            function EventListService() {
                // Get from DB
                this.getEventList = function () {
                    var events = [
                        { eventId: 1, eventName: 'Event1', teamId: 1, teamName: 'Poseidon', eventDate: new Date() },
                        { eventId: 2, eventName: 'Event2', teamId: 1, teamName: 'Poseidon', eventDate: new Date() },
                        { eventId: 3, eventName: 'Event3', teamId: 2, teamName: 'EFCom', eventDate: new Date() },
                        { eventId: 4, eventName: 'Event4', teamId: 1, teamName: 'EFCOm', eventDate: new Date() }
                    ];
                    return events;
                };
            }
            EventListService.$inject = ["$filter"];
            return EventListService;
        })();
        Services.EventListService = EventListService;
        angular.module("checkMate").service("checkMate.Services.EventListService", EventListService);
    })(Services = checkMate.Services || (checkMate.Services = {}));
})(checkMate || (checkMate = {}));
//# sourceMappingURL=eventListService.js.map