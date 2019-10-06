import { Component, OnInit, Input } from '@angular/core';
import { Iproducts, products } from '../../mock/products';


@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component implements OnInit {
  public products: Iproducts[] = products;
  @Input()
 public selectedtab: number;
  constructor() { }

  ngOnInit() {

    this.selectedtab = 0;

  }
}
