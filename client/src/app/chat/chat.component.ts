import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  newMessage: string;
  messageList: string[] = [];
  id: string; //
  body: string; //
  constructor(private chatService: ChatService) {}

  // sendMessage() {
  //   this.chatService.sendMessage(this.newMessage);
  //   this.newMessage = '';
  // }
  ngOnInit() {
    //   this.chatService.getMessages().subscribe((message: string) => {
    //     this.messageList.push(message);
    //   });
  }
}
