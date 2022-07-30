import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SignInComponent } from './sign-in.component';



@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,ReactiveFormsModule, IonicModule], exports: [
    SignInComponent
  ]
})
export class SignInModule { }
