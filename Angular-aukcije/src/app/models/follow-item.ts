import { Item } from "./item";

export class FollowItem {
    constructor(item: Item) {
        this.item = item;
    }
    item: Item;
    quantity: number = 1;
    
}
