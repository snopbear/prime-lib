//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//Components
import { AssafImageUploaderComponent } from './image-uploader/image-uploader.component';

@NgModule({
  declarations: [AssafImageUploaderComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AssafImageUploaderComponent],
})
export class AssafImageUploaderModule {}
