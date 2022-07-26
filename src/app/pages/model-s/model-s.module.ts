import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSComponent } from './model-s.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModelDetailsComponent } from './components/model-details/model-details.component';
import { ModelSHeroComponent } from './components/model-s-hero/model-s-hero.component';


const routes: Routes = [
  {
    path: '',
    component: ModelSComponent,
    data: {
      title: 'Model S | Tesla',
      description: 'Model details page'
    }
  },
];


@NgModule({
  declarations: [
    ModelSComponent,
    ModelDetailsComponent,
    ModelSHeroComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ModelSModule { }
