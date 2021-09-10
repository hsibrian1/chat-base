import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user!: User
  @Output() selected = new EventEmitter<User>()
  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }

  select(): void {
    this.selected.emit(this.user)
  }

}
