// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { AssafCheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [AssafCheckboxComponent],
  imports: [CommonModule, CheckboxModule, ReactiveFormsModule, FormsModule],
  exports: [AssafCheckboxComponent],
})
export class AssafCheckboxModule {}
