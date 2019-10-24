import { Component, OnInit } from '@angular/core';
import { Message } from '../types/message';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages$: Observable<Message[]>;
  user: User;

  constructor(private db: AngularFirestore,
              private fireAuth: AngularFireAuth) { }

  ngOnInit() {
    this.messages$ = this.db.collection<Message>('messages', ref => ref.orderBy('createdAt', 'desc'))
      .valueChanges({ idField: 'id' });

    this.fireAuth.user.subscribe(res => this.user = res);
  }

  onSend(messageText: string) {
    const message: Message = {
      user: this.user ? this.user.displayName : 'Anonymous',
      text: messageText,
      createdAt: new Date()
    };

    // this.messages.push(message);
    this.db.collection('messages').add(message)
      .then(res => console.info('Document was created!', res))
      .catch(err => alert('no message for you!'));
  }

  onStar(message: Message) {
    this.db.collection('messages').doc(message.id).update({ isStarred: !message.isStarred })
      .then(res => console.info('Document was updated!', res));
  }
}
