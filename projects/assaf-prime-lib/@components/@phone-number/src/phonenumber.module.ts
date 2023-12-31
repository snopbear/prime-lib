//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
//Components
import { AssafPhonenumberComponent } from './phonenumber/phonenumber.component';
//Directives
import { NoplusDirective } from './directive/noplus.directive';
import { NumberOnlyDirective } from 'assaf-prime-lib/directives';


@NgModule({
  declarations: [AssafPhonenumberComponent, NoplusDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
    NumberOnlyDirective,
  ],
  exports: [AssafPhonenumberComponent],
})
export class AssafPhonenumberModule {}
