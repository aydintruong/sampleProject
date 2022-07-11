import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Receipt } from './receipt.model';
import { receiptService } from './receipt.service';

@Component({
  selector: 'app-actualreceipt',
  templateUrl: './actualreceipt.component.html',
  styleUrls: ['./actualreceipt.component.css']
})
export class ActualreceiptComponent implements OnInit {
  receipts: Receipt[];
  subscription: Subscription;

  constructor(private receiptService: receiptService) { }

  ngOnInit(){
    this.subscription = this.receiptService.receiptsChanged.subscribe(
      (receipts: Receipt[]) => {
        this.receipts = receipts;

      }
    );
    this.receipts = this.receiptService.getReceipts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    
  }

}
