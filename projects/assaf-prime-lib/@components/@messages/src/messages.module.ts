//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
//COmponents
import { AssafMessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [AssafMessagesComponent],
  imports: [CommonModule, MessagesModule, MessageModule],
  exports: [AssafMessagesComponent],
})
export class AssafMessagesModule {}
