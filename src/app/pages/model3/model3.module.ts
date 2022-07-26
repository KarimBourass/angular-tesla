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
    Model3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule

  ]
})
export class Model3Module { }
