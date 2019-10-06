import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Card1Component } from './dashboard/card1-tabs-maincontent/card1.component';
import { Card2Component } from './dashboard/card2-img/card2.component';
import { Card3Component } from './dashboard/card3-content/card3.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Card1Component,
    Card2Component,
    Card3Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
