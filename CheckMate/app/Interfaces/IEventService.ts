module checkMate.Interfaces {
    export interface IEventService {
        getEventList: () => Array<checkMate.Models.Event>;

        getEventDetailsByEventId: (eventId: number) => Models.Event;

        saveEvents : (eventDetails: Models.Event) => void;
    }
}