import * as firebase from 'firebase';

export interface Message {
  user: string;
  text: string;
  createdAt: Date | firebase.firestore.Timestamp;
}
