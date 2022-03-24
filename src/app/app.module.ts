import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClickOutsideDirective } from './click-outside.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ClickOutsideDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
