//Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
//Components
import { AssafRatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [AssafRatingComponent],
  imports: [CommonModule, RatingModule, ReactiveFormsModule, FormsModule],
  exports: [AssafRatingComponent],
})
export class AssafRatingModule {}
