import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
