import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './layouts/main-header/main-header.component';
import { MainSideMenuComponent } from './layouts/main-side-menu/main-side-menu.component';



@NgModule({
  declarations: [
    MainHeaderComponent,
    MainSideMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainHeaderComponent,
    MainSideMenuComponent,
  ]
})
export class SharedModule { }
