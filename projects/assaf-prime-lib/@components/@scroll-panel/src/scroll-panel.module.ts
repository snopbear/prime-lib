//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrollPanelModule } from 'primeng/scrollpanel';
//Components
import { AssafScrollPanelComponent } from './scroll-panel/scroll-panel.component';

@NgModule({
  declarations: [AssafScrollPanelComponent],
  imports: [CommonModule, ScrollTopModule, ScrollPanelModule],
  exports: [AssafScrollPanelComponent],
})
export class AssafScrollPanelModule {}
