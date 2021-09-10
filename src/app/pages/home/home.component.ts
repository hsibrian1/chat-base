import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { ChatsService } from 'src/app/services/chats.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('boxMessage') boxMessage!: ElementRef<HTMLInputElement>
  chatId = 'ojYHrXKAvdX4j1MdMyfa'
  userId = ''
  toUSerId = ''
  constructor(private chatService: ChatsService) {}

  ngOnInit(): void {
    this.chatService.messages$.subscribe((messages: string[]) => {
      console.log(messages)
    })
  }

  onKeyup(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
      this.chatService.sendMessage(
        this.chatId,
        this.boxMessage.nativeElement.value
      )
      this.boxMessage.nativeElement.value = ''
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
    }
  }
}
