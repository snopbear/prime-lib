//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
//Components
import { AssafProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';

@NgModule({
  declarations: [AssafProfileDropdownComponent],
  imports: [CommonModule, MenuModule],
  exports: [AssafProfileDropdownComponent],
})
export class AssafProfileDropdownModule {}
