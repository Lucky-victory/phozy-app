import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleCardComponent } from './single-card.component';



@NgModule({
  declarations: [SingleCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SingleCardComponent
  ]
})
export class SingleCardModule { }
