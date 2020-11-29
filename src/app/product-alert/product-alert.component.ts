import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
  @Input() product;
  @Output() notice =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
 

}
