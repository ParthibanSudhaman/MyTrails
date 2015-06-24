module checkMate.Models {

    export interface IEvent {
        eventId: number;
        eventName: string;
        teamId: number;
        teamName: string;
        eventDate: Date;
        preCheckList: Array<CheckListItem>;
        inCheckList: Array<CheckListItem>;
        postCheckList: Array<CheckListItem>;
    }

    export interface ICheckListItem {
        itemId: number;
        itemName: string;
        itemDescription: string;
        itemCompleted: boolean;
    }

    export class Event {
        constructor(event: IEvent = { eventId: -1, eventName: "", teamId: -1, teamName: "", eventDate: new Date(), preCheckList: [new CheckListItem()], inCheckList: [new CheckListItem()], postCheckList: [new CheckListItem()] }) {
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

        eventId: number;
        eventName: string;
        teamId: number;
        teamName: string;
        eventDate: Date;
        preCheckList: Array<CheckListItem>;
        inCheckList: Array<CheckListItem>;
        postCheckList: Array<CheckListItem>;
    }

    export class CheckListItem {
        constructor(checkListItem: ICheckListItem = { itemId: -1, itemName: "", itemDescription: "", itemCompleted: false }) {
            angular.extend(this, checkListItem);
            //this.itemId = checkListItem.itemId;
            //this.itemName = checkListItem.itemName;
            //this.itemDescription = checkListItem.itemDescription;
            //this.itemCompleted = checkListItem.itemCompleted;
        }

        itemId: number;
        itemName: string;
        itemDescription: string;
        itemCompleted: boolean;
    }
}