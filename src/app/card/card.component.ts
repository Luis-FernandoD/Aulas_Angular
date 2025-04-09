import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
inputType = "text";
isDisabled = true;


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