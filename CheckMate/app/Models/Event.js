var checkMate;
(function (checkMate) {
    var Models;
    (function (Models) {
        var Event = (function () {
            function Event(event) {
                if (event === void 0) { event = { eventId: -1, eventName: "", teamId: -1, teamName: "", eventDate: new Date(), preCheckList: [new CheckListItem()], inCheckList: [new CheckListItem()], postCheckList: [new CheckListItem()] }; }
                angular.extend(this, event);
                //this.eventId = -1;
                //this.eventName = "";
                //this.teamId = -1;
                //this.teamName = "";
                //this.eventDate = new Date();
                //this.preCheckList = [new Models.CheckListItem()];
                //this.inCheckList = [new Models.CheckListItem()];
                //this.postCheckList = [new Models.CheckListItem()];
            }
            return Event;
        })();
        Models.Event = Event;
        var CheckListItem = (function () {
            function CheckListItem(checkListItem) {
                if (checkListItem === void 0) { checkListItem = { itemId: -1, itemName: "", itemDescription: "", itemCompleted: false }; }
                angular.extend(this, checkListItem);
                //this.itemId = checkListItem.itemId;
                //this.itemName = checkListItem.itemName;
                //this.itemDescription = checkListItem.itemDescription;
                //this.itemCompleted = checkListItem.itemCompleted;
            }
            return CheckListItem;
        })();
        Models.CheckListItem = CheckListItem;
    })(Models = checkMate.Models || (checkMate.Models = {}));
})(checkMate || (checkMate = {}));
//# sourceMappingURL=Event.js.map