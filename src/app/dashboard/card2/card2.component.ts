import { Component, OnInit, Input } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {
 @Input()
 public mtgi: number;
  constructor() { }

  ngOnInit() {
    this.mtgi = 0;
  }

}
