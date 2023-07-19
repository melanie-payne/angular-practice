import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  public products = [
    { name: 'macbook pro', company: 'apple', price: 10.0 },
    { name: 'dell', company: 'dell', price: 10.0 },
    { name: 'phone', compant: 'apple', price: 20.0 },
  ];
}
