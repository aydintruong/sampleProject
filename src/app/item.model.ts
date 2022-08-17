
export class Item{
    public name: string;
    public basePrice: number;
    public addedTax: number;
    public totalPrice: number;
    public isExempt: boolean;
    public isImported: boolean;
    public quantity: number;
    public totalPriceWithQuantity: number;
    public stock: number;

    constructor(name: string, price: number, exempt: boolean, imported: boolean, quantity: number, stock: number) {
        this.addedTax = 0;
        this.name = name;
        this.basePrice = price;
        this.quantity = quantity;
        this.isExempt = exempt;
        this.isImported = imported;
        this.stock = stock;
        
        if(!exempt){
            this.addedTax = this.addedTax + parseFloat((Math.ceil((this.basePrice * .1) * 20) / 20).toFixed(2));
            console.log("String: " + (Math.ceil((this.basePrice * .1) * 20) / 20).toFixed(2));
            console.log("Parsed: " + parseFloat((Math.ceil((this.basePrice * .1) * 20) / 20).toFixed(2)));
        }
        if(imported){
            this.addedTax = this.addedTax + parseFloat((Math.ceil((this.basePrice * .05) * 20) / 20).toFixed(2));
            console.log("String: " + parseFloat((Math.ceil((this.basePrice * .05) * 20) / 20).toFixed(2)));
        }

        this.totalPrice = this.basePrice + this.addedTax;
        this.totalPriceWithQuantity = this.totalPrice * this.quantity;
    }
    

}