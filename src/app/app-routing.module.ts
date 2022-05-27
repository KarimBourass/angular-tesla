import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {
      title: `Electric Cars, Solar & Clean Energy`,
      description: 'Tesla Home page'
    }
  },
  {
    path: 'model',
    loadChildren: () => import('./model/model.module').then(m => m.ModelModule),
  },
  {
    path: 'account',
    loadChildren: () => import('./core/login/login.module').then(m => m.LoginModule),
    data: {
      title: `Tesla SSO - Sign In`,
      description: 'Tesla Sign In page'
    }
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
