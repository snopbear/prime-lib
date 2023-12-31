//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
//Components
import { AssafButtonUploaderComponent } from './button-uploader/button-uploader.component';

@NgModule({
  declarations: [AssafButtonUploaderComponent],
  imports: [CommonModule, ButtonModule],
  exports: [AssafButtonUploaderComponent],
})
export class AssafButtonUploaderModule {}
