import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent, ChildComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChildComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
