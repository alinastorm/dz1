import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {

  @Input()
  public title: string;

  public selectedtab: number;

  public tabSelect({ selectedIndex }: MatTabGroup): void {
    this.selectedtab = selectedIndex;
  }
}
