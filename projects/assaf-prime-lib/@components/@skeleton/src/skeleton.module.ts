//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
//Components
import { AssafSkeletonComponent } from './skeleton/skeleton.component';

@NgModule({
  declarations: [AssafSkeletonComponent],
  imports: [CommonModule, SkeletonModule],
  exports: [AssafSkeletonComponent],
})
export class AssafSkeletonModule {}
