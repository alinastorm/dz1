import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Iproducts, products } from '../assets/products';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {
  public products: Iproducts[] = products;
  @ViewChild('a', { static: true })
  public a: MatTabGroup;



  @Output()
  // tslint:disable-next-line: new-parens
  public tabtoogle: EventEmitter <MatTabGroup> = new EventEmitter;


   // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    console.log(this.products);

    console.log(this.a.selectedIndex);
  }

  public mc(): void {

    // console.log(this.a.selectedIndex);
    this.tabtoogle.emit(this.a);

  }
ngOndestroy() {


}
}
