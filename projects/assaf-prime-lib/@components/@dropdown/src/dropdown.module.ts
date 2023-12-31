//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { AutoCompleteModule } from 'primeng/autocomplete';
//Components
import { AssafDropdownComponent } from './components/dropdown/dropdown.component';
import { AssafDropdownListComponent } from './components/dropdown-list/dropdown-list.component';
//Pipes
import { GetFlagPipe } from './pipes/to-lower-case.pipe';
import { FormStatusPipe } from 'assaf-prime-lib/pipes';

@NgModule({
  declarations: [AssafDropdownComponent, GetFlagPipe, AssafDropdownListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    MultiSelectModule,
    AutoCompleteModule,
    FormStatusPipe,
  ],
  exports: [AssafDropdownComponent],
})
export class AssafDropdownModule {}
