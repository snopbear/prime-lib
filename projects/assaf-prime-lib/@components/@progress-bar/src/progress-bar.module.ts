//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
//Components
import { AssafProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [AssafProgressBarComponent],
  imports: [CommonModule, ProgressBarModule],
  exports: [AssafProgressBarComponent],
})
export class AssafProgressBarModule {}
