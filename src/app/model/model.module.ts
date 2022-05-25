import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelComponent } from './model.component';
import { RouterModule, Routes } from '@angular/router';
import { ModelDetailsComponent } from './components/model-details/model-details.component';

const routes: Routes = [
  {
    path: ':id',
    component: ModelComponent,
    data: {
      title: 'Model',
      description: 'Model details page'
    }
  },
];

@NgModule({
  declarations: [
    ModelComponent,
    ModelDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ModelModule { }
