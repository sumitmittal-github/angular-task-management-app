import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input({required : true})
  user! : User;

  @Output()
  selectedUserId = new EventEmitter<string>();

  get imagePath(){
    return '/users/' + this.user.image;
  }

  onClickSelectedUser() {
    this.selectedUserId.emit(this.user.id);
  }

  /*
  count = signal(0);
  
  decreaseCount(){
    this.count.update(v => v - 1);
  }
  increaseCount(){
    this.count.update(v => v + 1);
  }
  */

}