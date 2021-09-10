import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  @Input() chatId: string  = 'ojYHrXKAvdX4j1MdMyfa'
  messagesList: Message[] = []
  constructor(
    private chatService: ChatsService
  ) { }

  ngOnInit(): void {
    this.chatService.listMessages(this.chatId).subscribe((docs) => {
      this.messagesList = docs.map((doc) => {
        return doc.payload.doc.data()
      }).sort((a, b) => {
        if (a.sentAt > b.sentAt) return 1
        if (a.sentAt < b.sentAt) return -1
        return 0
      })
    })
  }

}
