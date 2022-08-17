import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../../item.model';
import { itemService } from '../../item.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') iForm: NgForm;

  constructor(private iService: itemService) { }

  ngOnInit(){
  }

  onAddItem(form: NgForm){
    const value = form.value;
    const newItem = new Item(value.name, value.price, value.exempt, value.imported, 1, value.stock);
    this.iService.addItem(newItem);
    form.reset();
  }

  onClear(){
    this.iForm.reset();

  }

}
