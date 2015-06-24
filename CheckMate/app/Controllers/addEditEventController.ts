module checkMate.Controllers {
    export class AddEditEventController {
        static $inject = ["checkMate.Services.EventService", "$routeParams", "$location", "$scope"];
        eventService: Interfaces.IEventService;
        eventDetails: Models.Event;
        eventId: number;
        $routeParams: ng.route.IRouteParamsService;
        $location: ng.ILocationService;
        eventDetailsCopy: Models.Event;
        scope: ng.IScope;
        
        constructor(eventService: Interfaces.IEventService, $routeParams: ng.route.IRouteParamsService, $location: ng.ILocationService, $scope: ng.IScope) {
            this.eventService = eventService;
            this.$routeParams = $routeParams;
            this.$location = $location;
            this.eventId = this.$routeParams["eventId"];
            this.eventDetails = this.eventService.getEventDetailsByEventId(this.eventId);
            this.eventDetailsCopy = angular.copy(this.eventDetails);
            this.scope = $scope;
        }

        saveEventDetails = () => {
            this.eventService.saveEvents(this.eventDetailsCopy);
            this.eventDetailsCopy = this.eventDetails;
            this.redirectToHome();
        }

        addNewCheckListItem = () => {
            this.eventDetailsCopy.preCheckList.push({ itemId: 4, itemName: 'Added', itemDescription: 'asdasdsashe checkins', itemCompleted: false });
        }

        redirectToHome = () => {
            this.$location.path('home');
        };
    }
    angular.module("checkMate").controller("checkMate.Controllers.addEditEventController", AddEditEventController);
} 