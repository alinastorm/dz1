import { Component, OnInit, Input } from '@angular/core';
import { Iproducts, products } from '../assets/products';


@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component implements OnInit {
  public products: Iproducts[] = products;
  @Input()
 public mtgi: number;
  constructor() { }

  ngOnInit() {
    this.mtgi = 0;
    // console.log(products[0]);
  }
}
