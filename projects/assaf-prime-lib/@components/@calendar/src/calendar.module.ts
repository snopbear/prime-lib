//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
//Components
import { AssafCalendarComponent } from './calendar/calendar.component';
//Pipes
import { FormStatusPipe } from 'assaf-prime-lib/pipes';

@NgModule({
  declarations: [AssafCalendarComponent],
  imports: [CommonModule, CalendarModule, ReactiveFormsModule, FormStatusPipe],
  exports: [AssafCalendarComponent],
})
export class AssafCalendarModule {}
