import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input({required : true})
  user! : User;

  @Input({required : true})
  selected: boolean = false;

  @Output()
  selectedUserEvent = new EventEmitter<number>();

  get imagePath(){
    return '/users/' + this.user.image;
  }

  onClickSelectedUser() {
    this.selectedUserEvent.emit(this.user.id);
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