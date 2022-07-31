import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CardsModule } from 'src/app/components/cards/cards.module';

import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,CardsModule,
  ],
  declarations: [HomePage],providers:[ApiService,AuthService]
})
export class HomePageModule {}
