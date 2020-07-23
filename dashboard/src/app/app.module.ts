import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginformComponent } from './loginform/loginform.component';
import{FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import{RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MaterialModule} from './material/material.module';
import { AreaComponent } from './widgets/area/area.component';
import{HighchartsChartModule} from 'highcharts-angular';
import{FlexLayoutModule} from '@angular/flex-layout';
import { CardsComponent } from './widgets/cards/cards.component';
import { Card2Component } from './widgets/card2/card2.component';
import { Card3Component } from './widgets/card3/card3.component';
import { Card4Component } from './widgets/card4/card4.component';




const appRoutes:Routes =[
  {
    path: '',
    component: LoginformComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginformComponent,
    DashboardComponent,
    AreaComponent,
    CardsComponent,
    Card2Component,
    Card3Component,
    Card4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    HighchartsChartModule,
    FlexLayoutModule,


    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
