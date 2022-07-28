import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleCardModule } from '../single-card/single-card.module';
import { CardsComponent } from './cards.component';



@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,SingleCardModule
  ],
  exports:[CardsComponent]
})
export class CardsModule { }
