//Modules
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
//Components
import { AssafRadioButtonComponent } from './radio-button/radio-button.component';

@NgModule({
  declarations: [AssafRadioButtonComponent],
  imports: [CommonModule, RadioButtonModule, ReactiveFormsModule],
  exports: [AssafRadioButtonComponent],
})
export class AssafRadioButtonModule {}
