//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
//Components
import { AssafToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [AssafToastComponent],
  imports: [CommonModule, ToastModule],
  exports: [AssafToastComponent],
})
export class AssafToastModule {}
