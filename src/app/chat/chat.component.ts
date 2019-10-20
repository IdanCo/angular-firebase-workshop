import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: string[] = [
    'Good Morning!',
    'Good Afternoon!',
    'Good evening!',
  ];

  constructor() { }

  ngOnInit() {
  }

  onSend(messageText: string) {
    this.messages.push(messageText);
  }
}
