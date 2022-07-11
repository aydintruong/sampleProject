import { Item } from "../item.model";

export class Cart{
    public items: Item[];
    public basePrice: number;
    public totalPrice: number;
    public taxPrice: number;

    constructor(items: Item[]){
        this.basePrice = 0;
        this.totalPrice = 0;
        this.taxPrice = 0;
        this.items = items;
        this.items.forEach((item) =>{
            this.basePrice = this.basePrice + (item.basePrice * item.quantity);
            this.totalPrice = this.totalPrice + (item.quantity * item.totalPrice);
            this.taxPrice = this.taxPrice + (item.quantity * item.addedTax);

        })

    }

    recalculatePrice(){
        this.totalPrice = 0;
        this.taxPrice = 0;
        this.basePrice = 0;
        this.items.forEach((item) =>{
            this.basePrice = this.basePrice + (item.basePrice * item.quantity);
            this.totalPrice = this.totalPrice + (item.quantity * item.totalPrice);
            this.taxPrice = this.taxPrice + (item.quantity * item.addedTax);

        })       
    }

}