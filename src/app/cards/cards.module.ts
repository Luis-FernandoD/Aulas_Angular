import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { MatSliderModule } from '@angular/material/slider';
import { CardButtonComponent } from '../card-button/card-button.component';


@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,  
  ],
  imports: [
    CommonModule,
    MatSliderModule,
  ],
  exports: [
    CardComponent,
    CardButtonComponent,  
  ],
})
export class CardsModule { }
