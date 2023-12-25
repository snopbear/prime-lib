//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
//Components
import { AssafButtonComponent } from './button/button.component';

@NgModule({
  declarations: [AssafButtonComponent],
  imports: [CommonModule, ButtonModule],
  exports: [AssafButtonComponent],
})
export class AssafButtonModule {}
