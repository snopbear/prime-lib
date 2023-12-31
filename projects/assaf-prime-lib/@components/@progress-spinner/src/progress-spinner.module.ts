//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
//Components
import { AssafProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [AssafProgressSpinnerComponent],
  imports: [CommonModule, ProgressSpinnerModule],
  exports: [AssafProgressSpinnerComponent],
})
export class AssafProgressSpinnerModule {}
