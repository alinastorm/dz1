import { Component, ViewChild, OnInit } from '@angular/core';

import { MatTabGroup } from '@angular/material/tabs';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {
  public mtg: MatTabGroup;
  public mtgi: number;
  public setMTG(mtg: MatTabGroup): void {

    this.mtg = mtg;
    this.mtgi = this.mtg.selectedIndex;
    // Promise.resolve().then(() =>
    // console.log(this.mtg.selectedIndex);
  }








}
