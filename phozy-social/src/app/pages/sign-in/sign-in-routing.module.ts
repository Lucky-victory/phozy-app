import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignupComponent } from '../../components/signup/signup.component';

import { SignInPage } from './sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: SignInPage,
    
  },
      {
        path: 'signIn', component: SignInComponent
      }, {
        path: 'sign-up', component: SignupComponent
      }
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInPageRoutingModule {}
