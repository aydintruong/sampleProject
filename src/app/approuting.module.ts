import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ActualreceiptComponent } from "./actualreceipt/actualreceipt.component";
import { ReceiptDetailComponent } from "./actualreceipt/receipt-detail/receipt-detail.component";
import { ReceiptStartComponent } from "./actualreceipt/receipt-start/receipt-start.component";
import { ReceiptComponent } from "./receipt/receipt.component";
import { ShoppinglistComponent } from "./shoppinglist/shoppinglist.component";

const appRoutes: Routes = [
    {path: '', redirectTo: 'shopping-list', pathMatch: 'full'},
    {path: 'shopping-list', component: ShoppinglistComponent },
    {path: 'cart', component: ReceiptComponent },
    {path: 'receipts', component: ActualreceiptComponent, children: [
        {path: '', component: ReceiptStartComponent},
        {path: ':id', component: ReceiptDetailComponent}
    ]}
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule{

}