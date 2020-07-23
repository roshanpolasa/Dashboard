import { NgModule } from '@angular/core';
import{MatToolbarModule } from '@angular/material/toolbar';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatDividerModule} from '@angular/material/divider';
import{MatCardModule} from '@angular/material/card';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import{MatBadgeModule, MatBadge } from '@angular/material/badge' 

const MaterialComponents = [
MatToolbarModule,
MatSidenavModule,
MatDividerModule,
MatCardModule,
MatButtonModule,
MatIconModule,
MatBadgeModule
];

@NgModule({
  
  imports: [
  MaterialComponents
  ],
  exports : [
    MaterialComponents

  ]
})
export class MaterialModule { }
