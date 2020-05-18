import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  userName: string = 'Amine';
  message: string;
  output: any[] = [];
  feedback: string;
  constructor(private chatservice: ChatService) {}

  ngOnInit(): void {
    this.chatservice
      .listen('typing')
      .subscribe((data) => this.updateFeedback(data));
    this.chatservice
      .listen('chat')
      .subscribe((data) => this.updateMessage(data));
  }

  messageTyping(): void {
    this.chatservice.emit('typing', this.userName);
  }

  sendMessage(): void {
    this.chatservice.emit('chat', {
      message: this.message,
      handle: this.userName,
    });
    this.message = '';
    document.getElementById('exampleFormControlTextarea2').innerHTML = '';
  }

  updateMessage(data: any) {
    this.feedback = '';
    if (!!!data) return;
    console.log(`${data.handle} : ${data.message}`);
    this.output.push(data);
  }

  updateFeedback(data: any) {
    this.feedback = `${data} is typing a message`;
  }
}
