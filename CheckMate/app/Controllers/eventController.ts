module checkMate.Controllers {
    export class EventController {
        static $inject = ["checkMate.Services.EventService"];
        eventService: Interfaces.IEventService;
        events: Array<Models.Event>;
        event: Models.Event;
        eventDetails: Models.Event;
        selectedEvent: number;

        constructor(eventService: Interfaces.IEventService) {
            this.eventService = eventService;
            this.events = this.eventService.getEventList();
        }

        getEvents = () => {
            this.events = this.eventService.getEventList();
        }

        getEventDetails = (eventId: number) => {
            this.selectedEvent = eventId;
            this.eventDetails = this.eventService.getEventDetailsByEventId(eventId);
        }
    }
    angular.module("checkMate").controller("checkMate.Controllers.eventController", EventController);
}