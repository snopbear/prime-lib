//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//Components
import { AssafChartsComponent } from './components/charts/charts.component';

@NgModule({
  declarations: [AssafChartsComponent],
  imports: [CommonModule, NgxChartsModule],
  exports: [AssafChartsComponent],
})
export class AssafChartsModule {}
