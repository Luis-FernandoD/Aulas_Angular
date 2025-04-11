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

private _plantype: string = '';
@Input('planType') set planType(value: string) {
  this._plantype = value.toUpperCase();
}
get planType(): String {
  return this._plantype;
}

@Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;
buttonClicked(valueEmitted: boolean) {
  console.log('buttonClicked', valueEmitted);
  console.log('planType', this.planType);
  console.log('planPrice', this.planPrice);
// }
// enableInput(){
//   this.isDisabled = false;
// }

// disableInput(){
//   this.isDisabled = true;
// }

// setPasswordTypeInput(){
//   this.inputType = "password";
// }

// setTextTypeInput(){
//   this.inputType = "text";
}
}