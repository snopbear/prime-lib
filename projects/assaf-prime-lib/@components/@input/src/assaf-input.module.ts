//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { ChipsModule } from 'primeng/chips';
//Components
import { AssafInputComponent } from './components/input/input.component';
import { AssafTextareaComponent } from './components/textarea/textarea.component';
import { AssafTextinputComponent } from './components/textinput/textinput.component';
import { AssafPasswordinputComponent } from './components/passwordinput/passwordinput.component';
import { AssafChipComponent } from './components/chip/chip.component';
import { FormStatusPipe } from 'assaf-prime-lib/pipes';
//Pipes

@NgModule({
  declarations: [
    AssafInputComponent,
    AssafTextareaComponent,
    AssafTextinputComponent,
    AssafPasswordinputComponent,
    AssafChipComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    KeyFilterModule,
    PasswordModule,
    ReactiveFormsModule,
    DividerModule,
    ChipsModule,
    FormStatusPipe,
  ],
  exports: [AssafInputComponent],
})
export class AssafInputModule {}
