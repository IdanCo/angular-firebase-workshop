import { Component, OnInit } from '@angular/core';
import { Message } from '../types/message';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages$: Observable<Message[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.messages$ = this.db.collection<Message>('messages', ref => ref.orderBy('createdAt', 'desc'))
      .valueChanges({ idField: 'id' });
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

  onStar(message: Message) {
    this.db.collection('messages').doc(message.id).update({ isStarred: !message.isStarred })
      .then(res => console.info('Document was updated!', res));
  }
}
