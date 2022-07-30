import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPhotoPageRoutingModule } from './new-photo-routing.module';

import { NewPhotoPage } from './new-photo.page';
import { ApiService } from 'src/app/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    NewPhotoPageRoutingModule,HttpClientModule
  ],
  declarations: [NewPhotoPage],providers:[ApiService,AuthService]
})
export class NewPhotoPageModule {}
