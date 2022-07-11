import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { receiptService } from '../actualreceipt/receipt.service';
import { Cart } from './cart.model';
import { cartService } from './cart.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit, OnDestroy {
  cart: Cart;
  subscription: Subscription;

  constructor(private cartService: cartService, private receiptService: receiptService) { }

  ngOnInit(){
    this.subscription = this.cartService.cartChanged.subscribe(
      (cart: Cart) => {
        this.cart = cart;
      }

    );
    this.cart = this.cartService.getCart();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    
  }

  onDeleteItem(index: number){
    this.cartService.removeFromCart(index);

  }

  onAddReceipt(){  
    this.receiptService.addToReceipts(this.cart); 
    this.cartService.clearCart();
  }

}
