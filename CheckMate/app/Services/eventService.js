/// <reference path="../Models/Event.ts" />
var checkMate;
(function (checkMate) {
    var Services;
    (function (Services) {
        var EventService = (function () {
            function EventService($filter) {
                var _this = this;
                this.prePoseidoncheckListItems1 = [
                    { itemId: 1, itemName: 'Pre - POS - 1 - DB check', itemDescription: 'Pre - POS - 1 - check the database', itemCompleted: false },
                    { itemId: 1, itemName: 'Pre - POS - 1 - scripts check', itemDescription: 'Pre - POS - 1 - check the scripts', itemCompleted: false },
                    { itemId: 1, itemName: 'Pre - POS - 1 - code check', itemDescription: 'Pre - POS - 1 - check the code', itemCompleted: false },
                    { itemId: 1, itemName: 'Pre - POS - 1 - check-in check', itemDescription: 'Pre - POS - 1 - check the checkins', itemCompleted: false }
                ];
                this.inPoseidoncheckListItems1 = [
                    { itemId: 1, itemName: 'In - POS - 1 - DB check', itemDescription: 'In - POS - 1 - check the database', itemCompleted: false },
                    { itemId: 1, itemName: 'In - POS - 1 - scripts check', itemDescription: 'In - POS - 1 - check the scripts', itemCompleted: false },
                    { itemId: 1, itemName: 'In - POS - 1 - code check', itemDescription: 'In - POS - 1 - check the code', itemCompleted: false },
                    { itemId: 1, itemName: 'In - POS - 1 - check-in check', itemDescription: 'In - POS - 1 - check the checkins', itemCompleted: false }
                ];
                this.postPoseidoncheckListItems1 = [
                    { itemId: 1, itemName: 'Post - POS - 1 - DB check', itemDescription: 'Post - POS - 1 - check the database', itemCompleted: false },
                    { itemId: 1, itemName: 'Post - POS - 1 - scripts check', itemDescription: 'Post - POS - 1 - check the scripts', itemCompleted: false },
                    { itemId: 1, itemName: 'Post - POS - 1 - code check', itemDescription: 'Post - POS - 1 - check the code', itemCompleted: false },
                    { itemId: 1, itemName: 'Post - POS - 1 - check-in check', itemDescription: 'Post - POS - 1 - check the checkins', itemCompleted: false }
                ];
                this.prePoseidoncheckListItems2 = [
                    { itemId: 1, itemName: 'Pre - POS - 2 - DB check', itemDescription: 'Pre - POS - 2 - check the database', itemCompleted: false },
                    { itemId: 1, itemName: 'Pre - POS - 2 - scripts check', itemDescription: 'Pre - POS - 2 - check the scripts', itemCompleted: false },
                    { itemId: 1, itemName: 'Pre - POS - 2 - code check', itemDescription: 'Pre - POS - 2 - check the code', itemCompleted: false },
                    { itemId: 1, itemName: 'Pre - POS - 2 - check-in check', itemDescription: 'Pre - POS - 2 - check the checkins', itemCompleted: false }
                ];
                this.inPoseidoncheckListItems2 = [
                    { itemId: 1, itemName: 'In - POS - 2 - DB check', itemDescription: 'In - POS - 2 - check the database', itemCompleted: false },
                    { itemId: 1, itemName: 'In - POS - 2 - scripts check', itemDescription: 'In - POS - 2 - check the scripts', itemCompleted: false },
                    { itemId: 1, itemName: 'In - POS - 2 - code check', itemDescription: 'In - POS - 2 - check the code', itemCompleted: false },
                    { itemId: 1, itemName: 'In - POS - 2 - check-in check', itemDescription: 'In - POS - 2 - check the checkins', itemCompleted: false }
                ];
                this.postPoseidoncheckListItems2 = [
                    { itemId: 1, itemName: 'post - POS - 2 - DB check', itemDescription: 'post - POS - 2 - check the database', itemCompleted: false },
                    { itemId: 1, itemName: 'post - POS - 2 - scripts check', itemDescription: 'post - POS - 2 - check the scripts', itemCompleted: false },
                    { itemId: 1, itemName: 'post - POS - 2 - code check', itemDescription: 'post - POS - 2 - check the code', itemCompleted: false },
                    { itemId: 1, itemName: 'post - POS - 2 - check-in check', itemDescription: 'post - POS - 2 - check the checkins', itemCompleted: false }
                ];
                this.preEfComcheckListItems1 = [
                    { itemId: 1, itemName: 'pre - EF - 1 - DB check', itemDescription: 'pre - EF - 1 - check the database', itemCompleted: false },
                    { itemId: 1, itemName: 'pre - EF - 1 - scripts check', itemDescription: 'pre - EF - 1 - check the scripts', itemCompleted: false },
                    { itemId: 1, itemName: 'pre - EF - 1 - code check', itemDescription: 'pre - EF - 1 - check the code', itemCompleted: false },
                    { itemId: 1, itemName: 'pre - EF - 1 - check-in check', itemDescription: 'pre - EF - 1 - check the checkins', itemCompleted: false }
                ];
                this.inEfComcheckListItems1 = [
                    { itemId: 1, itemName: 'In - EF - 1 - DB check', itemDescription: 'In - EF - 1 - check the database', itemCompleted: false },
                    { itemId: 1, itemName: 'In - EF - 1 - scripts check', itemDescription: 'In - EF - 1 - check the scripts', itemCompleted: false },
                    { itemId: 1, itemName: 'In - EF - 1 - code check', itemDescription: 'In - EF - 1 - check the code', itemCompleted: false },
                    { itemId: 1, itemName: 'In - EF - 1 - check-in check', itemDescription: 'In - EF - 1 - check the checkins', itemCompleted: false }
                ];
                this.postEfComcheckListItems1 = [
                    { itemId: 1, itemName: 'post - EF - 1 - DB check', itemDescription: 'post - EF - 1 - check the database', itemCompleted: false },
                    { itemId: 1, itemName: 'post - EF - 1 - scripts check', itemDescription: 'post - EF - 1 - check the scripts', itemCompleted: false },
                    { itemId: 1, itemName: 'post - EF - 1 - code check', itemDescription: 'post - EF - 1 - check the code', itemCompleted: false },
                    { itemId: 1, itemName: 'post - EF - 1 - check-in check', itemDescription: 'post - EF - 1 - check the checkins', itemCompleted: false }
                ];
                this.preEfComcheckListItems2 = [
                    { itemId: 1, itemName: 'pre - EF - 2 - DB check', itemDescription: 'pre - EF - 2 - check the database', itemCompleted: false },
                    { itemId: 1, itemName: 'pre - EF - 2 - scripts check', itemDescription: 'pre - EF - 2 - check the scripts', itemCompleted: false },
                    { itemId: 1, itemName: 'pre - EF - 2 - code check', itemDescription: 'pre - EF - 2 - check the code', itemCompleted: false },
                    { itemId: 1, itemName: 'pre - EF - 2 - check-in check', itemDescription: 'pre - EF - 2 - check the checkins', itemCompleted: false }
                ];
                this.inEfComcheckListItems2 = [
                    { itemId: 1, itemName: 'In - EF - 2 - DB check', itemDescription: 'In - EF - 2 - check the database', itemCompleted: false },
                    { itemId: 1, itemName: 'In - EF - 2 - scripts check', itemDescription: 'In - EF - 2 - check the scripts', itemCompleted: false },
                    { itemId: 1, itemName: 'In - EF - 2 - code check', itemDescription: 'In - EF - 2 - check the code', itemCompleted: false },
                    { itemId: 1, itemName: 'In - EF - 2 - check-in check', itemDescription: 'In - EF - 2 - check the checkins', itemCompleted: false }
                ];
                this.postEfComcheckListItems2 = [
                    { itemId: 1, itemName: 'post - EF - 2 - DB check', itemDescription: 'post - EF - 2 - check the database', itemCompleted: false },
                    { itemId: 1, itemName: 'post - EF - 2 - scripts check', itemDescription: 'post - EF - 2 - check the scripts', itemCompleted: false },
                    { itemId: 1, itemName: 'post - EF - 2 - code check', itemDescription: 'post - EF - 2 - check the code', itemCompleted: false },
                    { itemId: 1, itemName: 'post - EF - 2 - check-in check', itemDescription: 'post - EF - 2 - check the checkins', itemCompleted: false }
                ];
                this.events = [
                    new checkMate.Models.Event({
                        eventId: 1,
                        eventName: "",
                        teamId: 1,
                        teamName: "Poseidon",
                        eventDate: new Date(),
                        preCheckList: [new checkMate.Models.CheckListItem({
                                itemId: 1,
                                itemName: 'Pre - POS - 1 - DB check',
                                itemDescription: 'Pre - POS - 1 - check the database',
                                itemCompleted: false
                            })],
                        inCheckList: [new checkMate.Models.CheckListItem({
                                itemId: 1,
                                itemName: 'Pre - POS - 1 - DB check',
                                itemDescription: 'Pre - POS - 1 - check the database',
                                itemCompleted: false
                            })],
                        postCheckList: [new checkMate.Models.CheckListItem({
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
                this.getEventList = function () {
                    return _this.events;
                };
                this.getEventDetailsByEventId = function (eventId) {
                    if (_this.$filter('filter')(_this.events, { eventId: eventId }).length > 0) {
                        _this.eventDetails = _this.$filter('filter')(_this.events, { eventId: eventId })[0];
                    }
                    else {
                        _this.eventDetails = new checkMate.Models.Event();
                    }
                    return _this.eventDetails;
                };
                this.saveEvents = function (eventDetails) {
                    var itemFound = false;
                    for (var i = 0; i < _this.events.length - 1; i++) {
                        if (_this.events[i].eventId === eventDetails.eventId) {
                            _this.events[i] = eventDetails;
                            itemFound = true;
                            break;
                        }
                    }
                    if (!itemFound) {
                        var eventId = _this.events[_this.events.length - 1].eventId++;
                        _this.events.push(eventDetails);
                    }
                };
                this.$filter = $filter;
            }
            EventService.$inject = ["$filter"];
            return EventService;
        })();
        Services.EventService = EventService;
        angular.module("checkMate").service("checkMate.Services.EventService", EventService);
    })(Services = checkMate.Services || (checkMate.Services = {}));
})(checkMate || (checkMate = {}));
//# sourceMappingURL=eventService.js.map