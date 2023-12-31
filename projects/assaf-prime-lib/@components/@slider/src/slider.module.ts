//Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModule } from 'primeng/slider';
//Components
import { AssafSliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [AssafSliderComponent],
  imports: [CommonModule, SliderModule, ReactiveFormsModule, FormsModule],
  exports: [AssafSliderComponent],
})
export class AssafSliderModule {}
