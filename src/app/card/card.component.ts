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

@Input('planType') planType: string = 'Simples';
@Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;
buttonClicked(valueEmitted: boolean) {
  console.log('buttonClicked', valueEmitted);
}
enableInput(){
  this.isDisabled = false;
}

disableInput(){
  this.isDisabled = true;
}

setPasswordTypeInput(){
  this.inputType = "password";
}

setTextTypeInput(){
  this.inputType = "text";
}
}