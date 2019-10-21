import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from '../types/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  @Output() starred = new EventEmitter<Message>();

  constructor() { }

  ngOnInit() {
  }

  onStar(message: Message) {
    this.starred.emit(message);
  }
}
