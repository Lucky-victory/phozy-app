import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';
import { NotifToastModule } from 'src/app/components/notif-toast/notif-toast.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    SignUpPageRoutingModule,NotifToastModule
  ],
  declarations: [SignUpPage]
})
export class SignUpPageModule {}
