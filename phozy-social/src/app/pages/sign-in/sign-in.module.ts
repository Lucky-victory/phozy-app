import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { SignInModule } from '../../components/sign-in/sign-in.module';
import { SignupModule } from '../../components/signup/signup.module';
import { SignInPage } from './sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    SignInPageRoutingModule,SignInModule,SignupModule,HttpClientModule],
  declarations: [SignInPage],providers:[AuthService]
})
export class SignInPageModule {}
