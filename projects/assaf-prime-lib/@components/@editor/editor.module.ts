//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from 'primeng/editor';
import { ReactiveFormsModule } from '@angular/forms';
//Compoents
import { AssafEditorComponent } from './components/editor/editor.component';

@NgModule({
  declarations: [AssafEditorComponent],
  imports: [CommonModule, EditorModule, ReactiveFormsModule],
  exports: [AssafEditorComponent],
})
export class AssafEditorModule {}
