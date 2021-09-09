import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('boxMessage') boxMessage!: ElementRef<HTMLInputElement>
  constructor() {}

  ngOnInit(): void {}

  onKeyup(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
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
