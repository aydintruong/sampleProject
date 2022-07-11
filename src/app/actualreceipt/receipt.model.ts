import { Cart } from "../receipt/cart.model";

export class Receipt{
    public cart: Cart;
    public date: Date;
    public totalPrice: number;

    constructor(cart: Cart){
        this.cart = cart;
        this.totalPrice = this.cart.totalPrice;
        this.date = new Date();
    }

}