//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
//Compoents
import { AssafChipComponent } from './chip/chip.component';

@NgModule({
  declarations: [AssafChipComponent],
  imports: [CommonModule, ChipModule],
  exports: [AssafChipComponent],
})
export class AssafChipModule {}
