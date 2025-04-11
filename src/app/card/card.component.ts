import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
inputType = "text";
isDisabled = true;


@Input({alias: 'planType', transform:(value:string) => value.toUpperCase()}) planType: string = ''; 
  

@Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;
  buttonClicked(valueEmitted: boolean) {
  console.log('buttonClicked', valueEmitted);
  console.log('planType', this.planType);
  console.log('planPrice', this.planPrice);
  }
}
 