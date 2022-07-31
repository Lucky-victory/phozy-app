import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleCardModule } from '../single-card/single-card.module';
import { CardsComponent } from './cards.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,SingleCardModule,IonicModule
  ],
  exports:[CardsComponent]
})
export class CardsModule { }
