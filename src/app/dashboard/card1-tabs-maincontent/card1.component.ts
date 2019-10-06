import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Iproducts, products } from '../../mock/products';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component  {
  public products: Iproducts[] = products;
  @ViewChild('tabs', { static: true })
  public tabs: MatTabGroup;

  @Output()
  // tslint:disable-next-line: new-parens
  public tabtoogle: EventEmitter <MatTabGroup> = new EventEmitter;

  public tabSelect(): void {

    this.tabtoogle.emit(this.tabs);

  }

}
