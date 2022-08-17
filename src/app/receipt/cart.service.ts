import { Subject } from "rxjs";
import { Item } from "../item.model";
import { Cart } from "./cart.model";

export class cartService{
    items: Item[] = [
        new Item("Speaker", 38, false, true, 2, 20),
        new Item("Calamari", 15, false, false, 5, 15)
    ]
    cartChanged = new Subject<Cart>();

    private cart = new Cart(this.items);
    
    getCart(){
        return this.cart;
    }

    getItemsInCart(){
        return this.cart.items.slice();
    }

    addToCart(item: Item){
        let unAdded = true;
        this.items.forEach(currItem => {
            if(currItem.name.localeCompare(item.name) == 0){
                currItem.quantity = currItem.quantity + item.quantity;
                unAdded = false;
            }
        });
        if(unAdded){
            this.cart.items.push(item);
        }
        this.cart.recalculatePrice();
        this.cartChanged.next(this.cart);
    }

    removeFromCart(index: number){
        this.cart.items.splice(index, 1);
        this.cart.recalculatePrice();
        this.cartChanged.next(this.cart);
    }
    
    clearCart(){
        this.cart.items.splice(0,this.cart.items.length);
        this.cart.recalculatePrice();
    }
}