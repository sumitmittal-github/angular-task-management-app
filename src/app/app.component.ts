import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { TaskComponent } from "./task/task.component";
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, UserComponent, TaskComponent]
})
export class AppComponent {
  users : User[] = DUMMY_USERS;
  
  selectedUser?: User;

  onSelectUser (id : string) {
    this.selectedUser = this.users.find(u => u.id === id)!;
  }

}