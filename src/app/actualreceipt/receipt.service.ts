import { Subject } from "rxjs";
import { Item } from "../item.model";
import { Cart } from "../receipt/cart.model";
import { Receipt } from "./receipt.model";

export class receiptService{

    items: Item[] = [
        new Item("Test", 38, false, true, 2),
        new Item("Calamari", 15, false, false, 5)
    ]

    cart = new Cart(this.items);
    
    private receipts: Receipt[] = [
        new Receipt(this.cart), 
        new Receipt(this.cart)

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
        this.receipts.push(new Receipt(newCart));
        this.receiptsChanged.next(this.receipts);   
    }

}