import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input()
  id! : string;

  @Input()
  name! : string;

  @Input()
  image! : string;

  @Output()
  selectedUserId = new EventEmitter();

  get imagePath(){
    return '/users/' + this.image;
  }

  onClickSelectedUser() {
    this.selectedUserId.emit(this.id);
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