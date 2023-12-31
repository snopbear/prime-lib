//Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
//Components
import { AssafFieldsetComponent } from './fieldset/fieldset.component';

@NgModule({
  declarations: [AssafFieldsetComponent],
  imports: [CommonModule, FieldsetModule],
  exports: [AssafFieldsetComponent],
})
export class AssafFieldSetModule {}
