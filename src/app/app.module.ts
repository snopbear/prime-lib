import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssafButtonModule } from 'assaf-prime-lib/@components/@button';
import { AssafInputModule } from 'assaf-prime-lib/@components/@input';
import { ReactiveFormsModule } from '@angular/forms';
import { AssafBadgeModule } from 'assaf-prime-lib/@components/@badge';
import { AssafRatingModule } from 'assaf-prime-lib/@components/@rating';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AssafButtonModule,
    AssafInputModule,
    AssafBadgeModule,
    AssafRatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
