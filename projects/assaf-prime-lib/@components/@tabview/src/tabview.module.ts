//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
//Components
import { AssafTabviewComponent } from './tabview/tabview.component';

@NgModule({
  declarations: [AssafTabviewComponent],
  imports: [CommonModule, TabViewModule],
  exports: [AssafTabviewComponent],
})
export class AssafTabviewModule {}
