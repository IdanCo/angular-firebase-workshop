import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public fireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  signOut() {
    this.fireAuth.auth.signOut();
  }

  signIn() {
    this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}
