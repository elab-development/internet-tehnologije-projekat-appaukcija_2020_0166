import { Item } from "./item";

export class CartItem {
    constructor(item: Item) {
        this.item = item;
    }
    item: Item;
    quantity: number = 1;
    
}
