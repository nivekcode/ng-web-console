import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, ChildComponent } from './app.component';

import { provideNgWebConsole } from '../../../ng-web-console/src/lib/ng-web-console.providers';
import { NgWebConsoleComponent } from '../../../ng-web-console/src/lib/ng-web-console.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChildComponent, NgWebConsoleComponent],
  providers: [provideNgWebConsole()],
  bootstrap: [AppComponent],
})
export class AppModule {}
