import { Model3HeroComponent } from './components/model3-hero/model3-hero.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Model3Component } from './model3.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Model3Component,
    data: {
      title: 'Model 3 | Tesla',
      description: 'Model details page'
    }
  },
];


@NgModule({
  declarations: [
    Model3Component,
    Model3HeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule

  ]
})
export class Model3Module { }
