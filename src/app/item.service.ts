import { Item } from "./item.model";
import { Subject } from "rxjs";

export class itemService{
    itemChanged = new Subject<Item[]>();

    private items: Item[] = [
        new Item("Speaker", 38, false, true, 2, 15),
        new Item("Calamari", 15, true, false, 5, 20)
    ]

    getItems(){
        return this.items.slice();
    }

    getItem(index: number){
        return this.items[index];
    }

    addItem(item: Item){
        this.items.push(item);
        this.itemChanged.next(this.items.slice());

    }

    updateItem(index: number, newItem: Item){
        this.items[index] = newItem;
        this.itemChanged.next(this.items.slice());

    }

    deleteItem(index: number){
        this.items.splice(index,1);
        this.itemChanged.next(this.items.slice());

    }

    updateStock(index:number, quantity:number){
        this.items[index].stock = this.items[index].stock - quantity;
    }


}
