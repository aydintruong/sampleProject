import { Component, Input, OnInit } from '@angular/core';
import { Receipt } from '../receipt.model';
import { receiptService } from '../receipt.service';

@Component({
  selector: 'app-receipt-mini',
  templateUrl: './receipt-mini.component.html',
  styleUrls: ['./receipt-mini.component.css']
})
export class ReceiptMiniComponent implements OnInit {
  @Input() receipt: Receipt;
  @Input() index: number;


  constructor(private receiptService: receiptService) { }

  ngOnInit() {
  }

}
