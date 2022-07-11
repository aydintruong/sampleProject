import { Subject } from "rxjs";
import { Item } from "../item.model";
import { Cart } from "../receipt/cart.model";
import { Receipt } from "./receipt.model";

export class receiptService{

    items: Item[] = [
        new Item("Speaker", 38, false, true, 2),
        new Item("Calamari", 15, false, false, 5),
    ]
    
    items2: Item[] = [
        new Item("Speaker", 38, false, true, 2),
        new Item("Calamari", 15, false, false, 5),
        new Item("Coconut Water", 1.85, false, false, 6)
    ]

    cart = new Cart(this.items);
    cart2 = new Cart(this.items2);

    
    private receipts: Receipt[] = [
        new Receipt(this.cart, new Date('July 31, 2018 03:24:00')), 
        new Receipt(this.cart2, new Date('June 27, 2022 03:24:00'))

    ]

    receiptsChanged = new Subject<Receipt[]>();

    getReceipts(){
        return this.receipts;
    }

    getReceipt(index: number){
        return this.receipts[index];
    }

    addToReceipts(cart: Cart){
        let newItems: Item[] = [];
        cart.items.forEach((item) =>{
            newItems.push(item);
        })     
        let newCart = new Cart(newItems);
        this.receipts.push(new Receipt(newCart, new Date()));
        this.receiptsChanged.next(this.receipts);   
    }

}