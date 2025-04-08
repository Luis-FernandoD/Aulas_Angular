import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    CardComponent,  
  ],
  imports: [
    CommonModule,
    MatSliderModule,
  ],
  exports: [
    CardComponent,  
  ],
})
export class CardsModule { }
