import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginSignupPageRoutingModule } from './login-signup-routing.module';

import { LoginSignupPage } from './login-signup.page';
import { LoginModule } from '../../components/login/login.module';
import { SignupModule } from '../../components/signup/signup.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    LoginSignupPageRoutingModule,LoginModule,SignupModule
  ],
  declarations: [LoginSignupPage]
})
export class LoginSignupPageModule {}
