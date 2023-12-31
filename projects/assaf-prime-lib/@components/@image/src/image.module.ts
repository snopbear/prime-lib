//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
//Components
import { AssafImageComponent } from './image/image.component';

@NgModule({
  declarations: [AssafImageComponent],
  imports: [CommonModule, ImageModule],
  exports: [AssafImageComponent],
})
export class AssafImageModule {}
