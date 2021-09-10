import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = []
  @Output() selected = new EventEmitter<User>()
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.list().subscribe((docs) => {
      this.users = docs.map((doc) => {
        return doc.payload.doc.data()
      })
      this.users = this.users.filter((user) => user.identification !== 'WyRzWxz1qj0zKj50CUxo')
    })
  }

  emitSelected(user: User) {
    this.selected.emit(user)
  }

}
