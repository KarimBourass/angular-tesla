import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeHeaderComponent } from './layout/home-header/home-header.component';
import { HomeFooterComponent } from './layout/home-footer/home-footer.component';
import { CarModelComponent } from './components/car-model/car-model.component';
import { ModileSideMenuComponent } from './components/modile-side-menu/modile-side-menu.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];


@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    CarModelComponent,
    ModileSideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class HomeModule { }
