import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Item } from '../item.model';
import { itemService } from '../item.service';
import { cartService } from '../receipt/cart.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  items: Item[];
  subscription: Subscription;
  @ViewChild('f') iForm: NgForm;

  constructor(private itemService: itemService, private cartService: cartService) { 

  }

  ngOnInit(){
    this.subscription = this.itemService.itemChanged.subscribe(
      (items: Item[]) => {
        this.items = items;
      }

    );
    this.items = this.itemService.getItems();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    
  }

  addToCart(index: number, form: NgForm){
    const value = form.value;
    const addedItem = this.itemService.getItem(index);
    addedItem.quantity = value.quantity;
    this.itemService.updateStock(index, addedItem.quantity);
    this.cartService.addToCart(addedItem);
    form.reset();

  }

}
