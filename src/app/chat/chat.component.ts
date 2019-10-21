import { Component, OnInit } from '@angular/core';
import { Message } from '../types/message';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [
    {
      user: 'John',
      text: 'Good Morning!',
      createdAt: new Date()
    },
    {
      user: 'Barbara',
      text: 'Good Afternoon!',
      createdAt: new Date()
    },
    {
      user: 'David',
      text: 'Good Evening!',
      createdAt: new Date()
    },
  ];

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  }

  onSend(messageText: string) {
    const message: Message = {
      user: 'Idan',
      text: messageText,
      createdAt: new Date()
    };

    // this.messages.push(message);
    this.db.collection('messages').add(message)
      .then(res => console.info('Document was created!', res));
  }
}
