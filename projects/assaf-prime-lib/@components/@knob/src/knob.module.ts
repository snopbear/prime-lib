//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';
//COmponents
import { AssafKnobComponent } from './knob/knob.component';

@NgModule({
  declarations: [AssafKnobComponent],
  imports: [CommonModule, FormsModule, KnobModule],
  exports: [AssafKnobComponent],
})
export class AssafKnobModule {}
