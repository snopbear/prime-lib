//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
//Components
import { AssafBadgeComponent } from './badge/badge.component';

@NgModule({
  imports: [CommonModule, BadgeModule],
  declarations: [AssafBadgeComponent],
  exports: [AssafBadgeComponent],
})
export class AssafBadgeModule {}
