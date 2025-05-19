import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input({required : true})
  id! : string;

  @Input({required : true})
  name! : string;

  @Input({required : true})
  image! : string;

  @Output()
  selectedUserId = new EventEmitter<String>();

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