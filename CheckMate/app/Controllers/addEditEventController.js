var checkMate;
(function (checkMate) {
    var Controllers;
    (function (Controllers) {
        var AddEditEventController = (function () {
            function AddEditEventController(eventService, $routeParams, $location, $scope) {
                var _this = this;
                this.saveEventDetails = function () {
                    _this.eventService.saveEvents(_this.eventDetailsCopy);
                    _this.eventDetailsCopy = _this.eventDetails;
                    _this.redirectToHome();
                };
                this.addNewCheckListItem = function () {
                    _this.eventDetailsCopy.preCheckList.push({ itemId: 4, itemName: 'Added', itemDescription: 'asdasdsashe checkins', itemCompleted: false });
                };
                this.redirectToHome = function () {
                    _this.$location.path('home');
                };
                this.eventService = eventService;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.eventId = this.$routeParams["eventId"];
                this.eventDetails = this.eventService.getEventDetailsByEventId(this.eventId);
                this.eventDetailsCopy = angular.copy(this.eventDetails);
                this.scope = $scope;
            }
            AddEditEventController.$inject = ["checkMate.Services.EventService", "$routeParams", "$location", "$scope"];
            return AddEditEventController;
        })();
        Controllers.AddEditEventController = AddEditEventController;
        angular.module("checkMate").controller("checkMate.Controllers.addEditEventController", AddEditEventController);
    })(Controllers = checkMate.Controllers || (checkMate.Controllers = {}));
})(checkMate || (checkMate = {}));
//# sourceMappingURL=addEditEventController.js.map