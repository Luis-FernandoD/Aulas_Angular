import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { CardButtonComponent } from './card-button/card-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardButtonComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
