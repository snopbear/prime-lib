import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssafButtonModule } from '@assaf/assaf-prime-lib/@components/@button';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AssafButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
