import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CardsModule } from 'src/app/components/cards/cards.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,CardsModule,HttpClientModule
  ],
  declarations: [HomePage],providers:[ApiService]
})
export class HomePageModule {}
