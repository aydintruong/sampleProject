import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Receipt } from '../receipt.model';
import { receiptService } from '../receipt.service';


@Component({
  selector: 'app-receipt-detail',
  templateUrl: './receipt-detail.component.html',
  styleUrls: ['./receipt-detail.component.css']
})
export class ReceiptDetailComponent implements OnInit {
  @Input() receipt: Receipt;
  id: number;

  constructor(private receiptService: receiptService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.receipt = this.receiptService.getReceipt(this.id);
        
      }
    );
  }

}
