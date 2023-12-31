//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
//Components
import { AssafCarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [AssafCarouselComponent],
  imports: [CommonModule, CarouselModule],
  exports: [AssafCarouselComponent],
})
export class AssafCarouselModule {}
