//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
//Components
import { AssafInputNumberComponent } from './input-number/input-number.component';
import { FormStatusPipe } from 'assaf-prime-lib/pipes';
//Pipes

@NgModule({
  declarations: [AssafInputNumberComponent],
  imports: [
    CommonModule,
    InputNumberModule,
    ReactiveFormsModule,
    FormStatusPipe,
  ],
  exports: [AssafInputNumberComponent],
})
export class AssafInputNumberModule {}
