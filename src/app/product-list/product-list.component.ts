import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { products } from '../products'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit(): void {
  }

  share() {
    window.confirm('确定要分享吗？')

  }

  noticeMe() {
    window.alert('请通知到我的手机上可以吗')
  }
}
