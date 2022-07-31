import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { AuthService } from 'src/app/services/auth.service';

import { SignupModule } from '../../components/signup/signup.module';
import { SignInPage } from './sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    SignInPageRoutingModule,SignupModule,],
  declarations: [SignInPage],providers:[AuthService]
})
export class SignInPageModule {}
