import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  selectedUser = DUMMY_USERS[this.randomIndex];

  get imagePath() {
    return '/users/' + this.selectedUser.avatar;
  }

  onClickSelectedUser() {
    this.selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
  }

  count: number=0;
  decreaseCount(){
    this.count = this.count-1;
  }
  increaseCount(){
    this.count = this.count+1;
  }

}