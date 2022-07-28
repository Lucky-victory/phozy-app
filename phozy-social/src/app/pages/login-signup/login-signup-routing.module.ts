import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { SignupComponent } from 'src/app/components/signup/signup.component';

import { LoginSignupPage } from './login-signup.page';

const routes: Routes = [
  {
    path: '',
    component: LoginSignupPage,
    
  },
      {
        path: 'login', component: LoginComponent
      }, {
        path: 'sign-up', component: SignupComponent
      }
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSignupPageRoutingModule {}
