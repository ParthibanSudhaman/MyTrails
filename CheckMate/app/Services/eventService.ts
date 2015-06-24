/// <reference path="../Models/Event.ts" />

module checkMate.Services{
    export class EventService implements checkMate.Interfaces.IEventService {

        static $inject = ["$filter"];
        $filter: ng.IFilterService;
        eventModel: Models.Event;
        eventDetails: Models.Event;

        constructor($filter: ng.IFilterService) {
            this.$filter = $filter;
        }
        

        prePoseidoncheckListItems1: Array<Models.CheckListItem> = [
            { itemId: 1, itemName: 'Pre - POS - 1 - DB check', itemDescription: 'Pre - POS - 1 - check the database', itemCompleted: false },
            { itemId: 1, itemName: 'Pre - POS - 1 - scripts check', itemDescription: 'Pre - POS - 1 - check the scripts', itemCompleted: false },
            { itemId: 1, itemName: 'Pre - POS - 1 - code check', itemDescription: 'Pre - POS - 1 - check the code', itemCompleted: false },
            { itemId: 1, itemName: 'Pre - POS - 1 - check-in check', itemDescription: 'Pre - POS - 1 - check the checkins', itemCompleted: false }
        ];
        inPoseidoncheckListItems1: Array<Models.CheckListItem> = [
            { itemId: 1, itemName: 'In - POS - 1 - DB check', itemDescription: 'In - POS - 1 - check the database', itemCompleted: false },
            { itemId: 1, itemName: 'In - POS - 1 - scripts check', itemDescription: 'In - POS - 1 - check the scripts', itemCompleted: false },
            { itemId: 1, itemName: 'In - POS - 1 - code check', itemDescription: 'In - POS - 1 - check the code', itemCompleted: false },
            { itemId: 1, itemName: 'In - POS - 1 - check-in check', itemDescription: 'In - POS - 1 - check the checkins', itemCompleted: false }
        ];
        postPoseidoncheckListItems1: Array<Models.CheckListItem> = [
            { itemId: 1, itemName: 'Post - POS - 1 - DB check', itemDescription: 'Post - POS - 1 - check the database', itemCompleted: false },
            { itemId: 1, itemName: 'Post - POS - 1 - scripts check', itemDescription: 'Post - POS - 1 - check the scripts', itemCompleted: false },
            { itemId: 1, itemName: 'Post - POS - 1 - code check', itemDescription: 'Post - POS - 1 - check the code', itemCompleted: false },
            { itemId: 1, itemName: 'Post - POS - 1 - check-in check', itemDescription: 'Post - POS - 1 - check the checkins', itemCompleted: false }
        ];
        prePoseidoncheckListItems2: Array<Models.CheckListItem> = [
            { itemId: 1, itemName: 'Pre - POS - 2 - DB check', itemDescription: 'Pre - POS - 2 - check the database', itemCompleted: false },
            { itemId: 1, itemName: 'Pre - POS - 2 - scripts check', itemDescription: 'Pre - POS - 2 - check the scripts', itemCompleted: false },
            { itemId: 1, itemName: 'Pre - POS - 2 - code check', itemDescription: 'Pre - POS - 2 - check the code', itemCompleted: false },
            { itemId: 1, itemName: 'Pre - POS - 2 - check-in check', itemDescription: 'Pre - POS - 2 - check the checkins', itemCompleted: false }
        ];
        inPoseidoncheckListItems2: Array<Models.CheckListItem> = [
            { itemId: 1, itemName: 'In - POS - 2 - DB check', itemDescription: 'In - POS - 2 - check the database', itemCompleted: false },
            { itemId: 1, itemName: 'In - POS - 2 - scripts check', itemDescription: 'In - POS - 2 - check the scripts', itemCompleted: false },
            { itemId: 1, itemName: 'In - POS - 2 - code check', itemDescription: 'In - POS - 2 - check the code', itemCompleted: false },
            { itemId: 1, itemName: 'In - POS - 2 - check-in check', itemDescription: 'In - POS - 2 - check the checkins', itemCompleted: false }
        ];
        postPoseidoncheckListItems2: Array<Models.CheckListItem> = [
            { itemId: 1, itemName: 'post - POS - 2 - DB check', itemDescription: 'post - POS - 2 - check the database', itemCompleted: false },
            { itemId: 1, itemName: 'post - POS - 2 - scripts check', itemDescription: 'post - POS - 2 - check the scripts', itemCompleted: false },
            { itemId: 1, itemName: 'post - POS - 2 - code check', itemDescription: 'post - POS - 2 - check the code', itemCompleted: false },
            { itemId: 1, itemName: 'post - POS - 2 - check-in check', itemDescription: 'post - POS - 2 - check the checkins', itemCompleted: false }
        ];
        preEfComcheckListItems1: Array<Models.CheckListItem> = [
            { itemId: 1, itemName: 'pre - EF - 1 - DB check', itemDescription: 'pre - EF - 1 - check the database', itemCompleted: false },
            { itemId: 1, itemName: 'pre - EF - 1 - scripts check', itemDescription: 'pre - EF - 1 - check the scripts', itemCompleted: false },
            { itemId: 1, itemName: 'pre - EF - 1 - code check', itemDescription: 'pre - EF - 1 - check the code', itemCompleted: false },
            { itemId: 1, itemName: 'pre - EF - 1 - check-in check', itemDescription: 'pre - EF - 1 - check the checkins', itemCompleted: false }
        ];
        inEfComcheckListItems1: Array<Models.CheckListItem> = [
            { itemId: 1, itemName: 'In - EF - 1 - DB check', itemDescription: 'In - EF - 1 - check the database', itemCompleted: false },
            { itemId: 1, itemName: 'In - EF - 1 - scripts check', itemDescription: 'In - EF - 1 - check the scripts', itemCompleted: false },
            { itemId: 1, itemName: 'In - EF - 1 - code check', itemDescription: 'In - EF - 1 - check the code', itemCompleted: false },
            { itemId: 1, itemName: 'In - EF - 1 - check-in check', itemDescription: 'In - EF - 1 - check the checkins', itemCompleted: false }
        ];
        postEfComcheckListItems1: Array<Models.CheckListItem> = [
            { itemId: 1, itemName: 'post - EF - 1 - DB check', itemDescription: 'post - EF - 1 - check the database', itemCompleted: false },
            { itemId: 1, itemName: 'post - EF - 1 - scripts check', itemDescription: 'post - EF - 1 - check the scripts', itemCompleted: false },
            { itemId: 1, itemName: 'post - EF - 1 - code check', itemDescription: 'post - EF - 1 - check the code', itemCompleted: false },
            { itemId: 1, itemName: 'post - EF - 1 - check-in check', itemDescription: 'post - EF - 1 - check the checkins', itemCompleted: false }
        ];
        preEfComcheckListItems2: Array<Models.CheckListItem> = [
            { itemId: 1, itemName: 'pre - EF - 2 - DB check', itemDescription: 'pre - EF - 2 - check the database', itemCompleted: false },
            { itemId: 1, itemName: 'pre - EF - 2 - scripts check', itemDescription: 'pre - EF - 2 - check the scripts', itemCompleted: false },
            { itemId: 1, itemName: 'pre - EF - 2 - code check', itemDescription: 'pre - EF - 2 - check the code', itemCompleted: false },
            { itemId: 1, itemName: 'pre - EF - 2 - check-in check', itemDescription: 'pre - EF - 2 - check the checkins', itemCompleted: false }
        ];
        inEfComcheckListItems2: Array<Models.CheckListItem> = [
            { itemId: 1, itemName: 'In - EF - 2 - DB check', itemDescription: 'In - EF - 2 - check the database', itemCompleted: false },
            { itemId: 1, itemName: 'In - EF - 2 - scripts check', itemDescription: 'In - EF - 2 - check the scripts', itemCompleted: false },
            { itemId: 1, itemName: 'In - EF - 2 - code check', itemDescription: 'In - EF - 2 - check the code', itemCompleted: false },
            { itemId: 1, itemName: 'In - EF - 2 - check-in check', itemDescription: 'In - EF - 2 - check the checkins', itemCompleted: false }
        ];
        postEfComcheckListItems2: Array<Models.CheckListItem> = [
            { itemId: 1, itemName: 'post - EF - 2 - DB check', itemDescription: 'post - EF - 2 - check the database', itemCompleted: false },
            { itemId: 1, itemName: 'post - EF - 2 - scripts check', itemDescription: 'post - EF - 2 - check the scripts', itemCompleted: false },
            { itemId: 1, itemName: 'post - EF - 2 - code check', itemDescription: 'post - EF - 2 - check the code', itemCompleted: false },
            { itemId: 1, itemName: 'post - EF - 2 - check-in check', itemDescription: 'post - EF - 2 - check the checkins', itemCompleted: false }
        ];

        events: Array<checkMate.Models.Event> = [
        new Models.Event({
                eventId: 1,
                eventName: "",
                teamId: 1,
                teamName: "Poseidon",
                eventDate: new Date(),
                preCheckList: [new Models.CheckListItem({
                    itemId: 1,
                    itemName: 'Pre - POS - 1 - DB check', 
                    itemDescription: 'Pre - POS - 1 - check the database',
                    itemCompleted: false
                })],
                inCheckList: [new Models.CheckListItem({
                    itemId: 1,
                    itemName: 'Pre - POS - 1 - DB check',
                    itemDescription: 'Pre - POS - 1 - check the database',
                    itemCompleted: false
                })],
                postCheckList: [new Models.CheckListItem({
                    itemId: 1,
                    itemName: 'Pre - POS - 1 - DB check',
                    itemDescription: 'Pre - POS - 1 - check the database',
                    itemCompleted: false
                })]
        }),
            //{
            //    eventId: 1,
            //    eventName: 'Pos - Event1',
            //    teamId: 1,
            //    teamName: 'Poseidon',
            //    eventDate: new Date(),
            //    preCheckList: this.prePoseidoncheckListItems1,
            //    inCheckList: this.inPoseidoncheckListItems1,
            //    postCheckList: this.postPoseidoncheckListItems1
            //},
            {
                eventId: 2,
                eventName: 'Pos - Event2',
                teamId: 1,
                teamName: 'Poseidon',
                eventDate: new Date(),
                preCheckList: this.prePoseidoncheckListItems2,
                inCheckList: this.inPoseidoncheckListItems2,
                postCheckList: this.postPoseidoncheckListItems2
            },
            {
                eventId: 3,
                eventName: 'EF - Event3',
                teamId: 2,
                teamName: 'EFCom',
                eventDate: new Date(),
                preCheckList: this.preEfComcheckListItems1,
                inCheckList: this.inEfComcheckListItems1,
                postCheckList: this.postEfComcheckListItems1
            },
            {
                eventId: 4,
                eventName: 'EF - Event4',
                teamId: 2,
                teamName: 'EFCom',
                eventDate: new Date(),
                preCheckList: this.preEfComcheckListItems2,
                inCheckList: this.inEfComcheckListItems2,
                postCheckList: this.postEfComcheckListItems2
            }
        ];

        
        // Get from DB
        getEventList = () => {
            return this.events;
        }

        getEventDetailsByEventId = (eventId: number) => {
            if (this.$filter('filter')(this.events, { eventId: eventId }).length > 0) {
                this.eventDetails = this.$filter('filter')(this.events, { eventId: eventId })[0];
            } else {
                this.eventDetails = new Models.Event();
            }
            return this.eventDetails;
        }

        saveEvents = (eventDetails: Models.Event) => {
            var itemFound = false;
            for (var i = 0; i < this.events.length - 1; i++) {
                if (this.events[i].eventId === eventDetails.eventId) {
                    this.events[i] = eventDetails;
                    itemFound = true;
                    break;
                }
            }
            if (!itemFound) {
                var eventId = this.events[this.events.length - 1].eventId++;
                this.events.push(eventDetails);
            }
        }

    }
    angular.module("checkMate").service("checkMate.Services.EventService", EventService);
}