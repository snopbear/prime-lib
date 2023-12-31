//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
//Components
import { AssafDividerComponent } from './divider/divider.component';
import { AssafButtonModule } from 'assaf-prime-lib/@components/@button';

@NgModule({
  declarations: [AssafDividerComponent],
  exports: [AssafDividerComponent],
  imports: [CommonModule, DividerModule, AssafButtonModule],
})
export class AssafDividerModule {}
