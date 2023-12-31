//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
//Components
import { AssafDataTableComponent } from './components/data-table/data-table.component';
import { AssafDataTableRowComponent } from './components/data-table-row/data-table-row.component';
import { AssafDataTableHeaderComponent } from './components/data-table-header/data-table-header.component';
import { AssafDataTableSearchInputComponent } from './components/data-table-search-input/data-table-search-input.component';
//Pipes
import { TransformTextPipe } from './pipes/table-general.pipe';
import { ConditionalStylePipe } from './pipes/conditional-style.pipe';
import { AssafButtonModule } from 'assaf-prime-lib/@components/@button';

@NgModule({
  declarations: [
    AssafDataTableComponent,
    AssafDataTableRowComponent,
    AssafDataTableHeaderComponent,
    TransformTextPipe,
    ConditionalStylePipe,
    AssafDataTableSearchInputComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    AssafButtonModule,
    InputSwitchModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
  ],
  exports: [AssafDataTableComponent, AssafDataTableSearchInputComponent],
})
export class AssafDataTableModule {}
