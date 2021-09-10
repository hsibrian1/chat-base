import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() message!: Message
  userId = 'WyRzWxz1qj0zKj50CUxo'
  constructor() { }

  ngOnInit(): void {
  }

}
