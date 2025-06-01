import { Component, EventEmitter, Output } from '@angular/core';
import { DUMMY_USERS } from '../../public/dummy-users';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users : User[] = DUMMY_USERS;
  
  selectedUser?: User = DUMMY_USERS[0];

  onSelectUser (id : number) {
    this.selectedUser = this.users.find(u => u.id === id)!;
  }

}