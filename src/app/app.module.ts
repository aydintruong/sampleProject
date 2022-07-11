import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { itemService } from './item.service';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { cartService } from './receipt/cart.service';
import { ActualreceiptComponent } from './actualreceipt/actualreceipt.component';
import { AppRoutingModule } from './approuting.module';
import { receiptService } from './actualreceipt/receipt.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReceiptMiniComponent } from './actualreceipt/receipt-mini/receipt-mini.component';
import { ReceiptStartComponent } from './actualreceipt/receipt-start/receipt-start.component';
import { ShoppingEditComponent } from './shoppinglist/shopping-edit/shopping-edit.component';
import { ReceiptDetailComponent } from './actualreceipt/receipt-detail/receipt-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceiptComponent,
    ShoppinglistComponent,
    ActualreceiptComponent,
    ReceiptMiniComponent,
    ReceiptStartComponent,
    ShoppingEditComponent,
    ReceiptDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [itemService, cartService, receiptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
