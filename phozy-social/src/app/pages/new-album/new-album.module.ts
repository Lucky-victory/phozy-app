import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAlbumPageRoutingModule } from './new-album-routing.module';

import { NewAlbumPage } from './new-album.page';
import { ApiService } from 'src/app/services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    NewAlbumPageRoutingModule,HttpClientModule
  ],
  declarations: [NewAlbumPage],providers:[ApiService]
})
export class NewAlbumPageModule {}
