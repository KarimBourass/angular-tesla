import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginFooterComponent } from './components/login-footer/login-footer.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
        data: {
          title: `Tesla SSO - Sign In`,
          description: 'Tesla Sign In page'
        }
      },
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'sign-in'
      },
    ]
  },

];

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    LoginComponent,
    LoginFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class LoginModule { }
